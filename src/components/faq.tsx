"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "../lib/utils"

const faqItems = [
  {
    question: "Quanto custa para criar um site profissional?",
    answer:
      "O valor varia conforme o tipo de site e as funcionalidades desejadas. Trabalhamos com soluções acessíveis e personalizadas — desde landing pages mais simples até sistemas completos. Solicite um orçamento gratuito e sem compromisso.",
  },
  {
    question: "Em quanto tempo meu site ou sistema fica pronto?",
    answer:
      "Depende do escopo. Landing pages podem ser entregues em até 7 dias úteis, enquanto sistemas mais completos podem levar de 2 a 4 semanas. Trabalhamos com agilidade e prazos reais, mantendo você informado em todas as etapas.",
  },
  {
    question: "O site vai funcionar bem em celular?",
    answer:
      "Sim! Todos os projetos são responsivos, adaptados para celular, tablet e desktop. Garantimos ótima navegação e carregamento rápido em qualquer dispositivo.",
  },
  {
    question: "Posso ter um sistema personalizado pro meu negócio?",
    answer:
      "Com certeza! Desenvolvemos sistemas sob medida, como painéis de gestão, catálogos de produtos, controle de pedidos e muito mais. Conte sua ideia que a gente transforma em solução digital.",
  },
  {
    question: "Vocês também criam aplicativos para celular?",
    answer:
      "Sim! Desenvolvemos aplicativos mobile personalizados para Android e iOS, ideais para aumentar a presença digital do seu negócio ou facilitar operações internas.",
  },
  {
    question: "Vocês integram com WhatsApp e redes sociais?",
    answer:
      "Sim, fazemos integração direta com WhatsApp, botões de contato e formulários que disparam mensagens automaticamente. Também conectamos com Instagram, Facebook e outros canais conforme sua estratégia.",
  },
  {
    question: "É possível atualizar o site sozinho depois?",
    answer:
      "Sim! Podemos criar um painel de controle intuitivo para você editar textos, imagens e produtos sem precisar de ajuda técnica. Também oferecemos suporte e treinamento se necessário.",
  },
  {
    question: "Preciso de hospedagem e domínio, vocês ajudam?",
    answer:
      "Sim, orientamos você na escolha da hospedagem ideal e ajudamos com o registro do domínio. Tudo para garantir que seu site fique online com segurança e desempenho.",
  },
  {
    question: "Também oferecem identidade visual ou logotipo?",
    answer:
      "Sim! Criamos logotipos, paletas de cores, tipografia e toda a identidade visual da sua marca, garantindo uma presença online profissional e coerente.",
  },
  {
    question: "Não sei o que preciso exatamente... podem me ajudar?",
    answer:
      "Claro! Você pode contar com nossa consultoria gratuita para entender o melhor caminho digital para o seu negócio. Basta entrar em contato e contar um pouco da sua ideia!",
  },
];


interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-200",
            isOpen ? "transform rotate-180" : "",
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de desenvolvimento web
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8">
          {/* Schema.org FAQ markup para SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
