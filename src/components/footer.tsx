
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Sobre</h3>
            <p className="mb-4">Desenvolvimento de soluções web personalizadas para impulsionar seu negócio online.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="hover:text-teal-400 transition-colors">
                  Sites e Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-teal-400 transition-colors">
                  Sistemas de Gestão
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-teal-400 transition-colors">
                  Automações
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-teal-400 transition-colors">
                  Integrações com WhatsApp
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-teal-400 transition-colors">
                  Catálogos Online
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                <span>(14) 99611-2228</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                <span>rafaelfigueiredojunior7@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors duration-300" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} Rafael Figueiredo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
