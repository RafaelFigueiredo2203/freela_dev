"use client"

import { motion } from "framer-motion"
import { Fingerprint, HeadphonesIcon, Wallet, Zap } from "lucide-react"

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-white" aria-hidden="true" />,
    title: "Entrega rápida",
    description: "Projetos entregues com agilidade e qualidade",
    alt: "Ícone de raio representando entrega rápida",
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8 text-white" aria-hidden="true" />,
    title: "Suporte direto",
    description: "Atendimento personalizado e direto com o desenvolvedor",
    alt: "Ícone de fones de ouvido representando suporte direto",
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-white" aria-hidden="true" />,
    title: "100% Personalizado",
    description: "Soluções criadas especificamente para o seu negócio",
    alt: "Ícone de impressão digital representando personalização",
  },
  {
    icon: <Wallet className="h-8 w-8 text-white" aria-hidden="true" />,
    title: "Pagamento facilitado",
    description: "Pagamento facilitado e seguro via Pix, Cartão de Crédito e Boleto",
    alt: "Ícone de carteira representando pagamento via Pix",
  },
]

export default function Benefits() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600 dark:bg-teal-800 text-white"
      id="beneficios"
      aria-labelledby="beneficios-titulo"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="beneficios-titulo" className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">Benefícios que fazem a diferença para o seu negócio</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-teal-700 dark:bg-teal-900 rounded-xl p-6 text-center hover:bg-teal-800 dark:hover:bg-teal-950 transition-colors duration-300"
            >
              <div
                className="mx-auto mb-4 p-3 bg-teal-500 dark:bg-teal-700 rounded-full inline-flex"
                aria-hidden="true"
              >
                {benefit.icon}
                <span className="sr-only">{benefit.alt}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="opacity-90">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
