"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-800 dark:to-emerald-700 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transformo sua ideia em solução online para seu negócio
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Sites, sistemas, automações e integrações com WhatsApp.
            <span className="block mt-2">Rápido, funcional e com preço acessível.</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-600 dark:bg-gray-800 dark:text-teal-400 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => {
              window.open(
                `https://wa.me/5514996112228?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços de desenvolvimento web.")}`,
                "_blank",
              )
            }}
            aria-label="Contato via WhatsApp"
          >
            Fale comigo no WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
