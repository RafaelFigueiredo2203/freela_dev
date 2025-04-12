"use client"

import { motion } from "framer-motion"
import ContactForm from "./contact-form"

export default function CTA() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de uma solução para o meu negócio. Podemos conversar?"
    window.open(`https://wa.me/5514996112228?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua ideia em realidade?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Entre em contato agora mesmo e vamos criar a solução ideal para o seu negócio. Primeiro contato sem
            compromisso!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 dark:bg-gray-800 dark:text-teal-400 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition duration-300 mb-6"
              onClick={handleWhatsAppClick}
            >
              Quero uma solução pro meu negócio
            </motion.button>
            <p className="text-center text-white/80">
              Ou preencha o formulário ao lado para que possamos entrar em contato
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
