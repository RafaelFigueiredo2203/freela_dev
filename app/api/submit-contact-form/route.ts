import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { date, email, name,service, phone } = body;

    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    const databaseId = process.env.NOTION_DATABASE_ID;

    const response = await notion.databases.query({
      database_id: databaseId as string,
      filter: {
        and: [
          {
            property: "Telefone", 
            rich_text: {
              equals: phone, 
            },
          },
          {
            property: "Data",
            date: {
              equals: date, 
            },
          },
        ],
      },
    });

    if (response.results.length > 0) {
      return NextResponse.json(
        { success: false, message: "Você já fez uma solicitação hoje." },
        { status: 400 }
      );
    }

    // Gerar o link do WhatsApp
    const whatsappLink = `http://api.whatsapp.com/send?phone=55${phone.replace(/ /g, '')}&text=${encodeURIComponent(
      `Olá, ${name}! Tudo bem? Me chamo Raiana e sou consultora financeira. Vi que você está interessado em nossos serviços! Poderia me contar um pouco mais sobre o que precisa? Assim, posso te ajudar da melhor forma possível! 😊`
    )}`;

    // Criar uma nova entrada na base de dados
    const createResponse = await notion.pages.create({
      parent: {
        database_id: databaseId as string,
      },
      properties: {
        "Data": {
          date: {
            start: date,
          },
        },
        "Email": {
          email: email,
        },
        "Service": {
          rich_text: [
            {
              text: {
                content: service,
              },
            },
          ],
        },
        "Cliente": {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        "Telefone": {
          rich_text: [
            {
              text: {
                content: phone,
              },
            },
          ],
        },
        "Link do WhatsApp": {
          url: whatsappLink,
        },
      },
    });

    return NextResponse.json({ success: true, id: createResponse.id }, { status: 200 });
  } catch (error: any) {
    console.error('Error submitting to Notion:', error);
    
    // Log detalhado do erro para depuração
    return NextResponse.json({ 
      message: 'Error submitting to Notion', 
      error: error.message,
      details: error.body ? error.body : 'No details',
      code: error.code || 'Unknown'
    }, { status: 500 });
  }
}