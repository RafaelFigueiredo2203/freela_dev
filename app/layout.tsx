import { ThemeProvider } from "@/src/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Desenvolvimento Web, Sites e Sistemas | Soluções Personalizadas",
  description:
    "Desenvolvimento de sites, sistemas, automações e integrações com WhatsApp. Criação de landing pages, formulários inteligentes e bots de atendimento com preço acessível.",
  keywords:
    "desenvolvimento web, criação de sites, landing page, site com whatsapp, formulários online, sistemas de gestão, automação de processos, integração whatsapp, catálogo online, desenvolvimento rápido, site responsivo, site profissional",
  authors: [{ name: "Seu Nome" }],
  creator: "Seu Nome ou Empresa",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seudominio.com.br",
    title: "Desenvolvimento Web, Sites e Sistemas | Soluções Personalizadas",
    description:
      "Desenvolvimento de sites, sistemas, automações e integrações com WhatsApp. Criação de landing pages, formulários inteligentes e bots de atendimento com preço acessível.",
    siteName: "Seu Nome ou Empresa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento Web, Sites e Sistemas | Soluções Personalizadas",
    description:
      "Desenvolvimento de sites, sistemas, automações e integrações com WhatsApp. Criação de landing pages, formulários inteligentes e bots de atendimento com preço acessível.",
    creator: "@seutwitter",
  },
  alternates: {
    canonical: "https://seudominio.com.br",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="9eCg0sBmScwH139o1Qp4KlkvKrULwLLFNsER7Zhe4N8" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
