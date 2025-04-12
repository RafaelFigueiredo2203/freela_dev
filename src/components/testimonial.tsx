"use client"

import mariaImg from '@/public/Maria.avif'
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            O que dizem nossos clientes
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10"
        >
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center italic mb-8">
            "Contratei o serviço para criar um site com catálogo para minha loja e fiquei impressionada com o resultado.
            O site ficou lindo, responsivo e com integração direta com meu WhatsApp. Os clientes adoraram a facilidade
            de navegar e entrar em contato. Recomendo muito!"
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-3">
              <Image alt="Maria Rodrigues" src={mariaImg} width={64} height={64} 
              className="text-teal-600 dark:text-teal-400 font-bold text-xl rounded-full"/>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-2">Maria Rodrigues</h4>
            <p className="text-gray-600 dark:text-gray-400">Proprietária da Boutique Elegance</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
