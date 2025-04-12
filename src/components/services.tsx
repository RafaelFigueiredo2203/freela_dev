"use client"

import { motion } from "framer-motion"
import { BarChart3, Bot, FileText, Globe, ShoppingBag, Smartphone } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-teal-500 dark:text-teal-400" aria-hidden="true" />,
    title: "Sites com para atrair mais clientes",
    description:
      "Sites modernos e responsivos com integração direta com WhatsApp para facilitar o contato com seus clientes.",
    alt: "Ícone de globo representando sites com integração WhatsApp",
  },
  {
    icon: <FileText className="h-10 w-10 text-teal-500 dark:text-teal-400" aria-hidden="true" />,
    title: "Formulários inteligentes",
    description: "Formulários personalizados que captam leads e enviam diretamente para seu WhatsApp ou email.",
    alt: "Ícone de documento representando formulários inteligentes",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-teal-500 dark:text-teal-400" aria-hidden="true" />,
    title: "Sistemas simples de gestão",
    description: "Sistemas web para gerenciar seu negócio de forma simples e eficiente.",
    alt: "Ícone de gráfico representando sistemas de gestão",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-teal-500 dark:text-teal-400" aria-hidden="true" />,
    title: "Catálogos online para produtos",
    description: "Catálogos digitais para mostrar seus produtos e serviços de forma organizada e profissional.",
    alt: "Ícone de sacola de compras representando catálogos online",
  },
  {
    icon: <Bot className="h-10 w-10 text-teal-500 dark:text-teal-400" aria-hidden="true" />,
    title: "Bots de atendimento e automações",
    description: "Automatize seu atendimento com bots inteligentes para WhatsApp e outras plataformas.",
    alt: "Ícone de robô representando bots de atendimento",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-teal-500 dark:text-teal-400" aria-hidden="true" />,
    title: "Aplicativos Mobile personalizados",
    description: "Desenvolvimento de apps para Android e iOS sob medida para o seu negócio, com foco em performance e experiência do usuário.",
    alt: "Ícone de smartphone representando aplicativos mobile",
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      id="servicos"
      aria-labelledby="servicos-titulo"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="servicos-titulo" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções personalizadas para impulsionar seu negócio online
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-full" aria-hidden="true">
                {service.icon}
                <span className="sr-only">{service.alt}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
