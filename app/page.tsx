import Benefits from "@/src/components/benefits"
import CTA from "@/src/components/cta"
import FAQ from "@/src/components/faq"
import Footer from "@/src/components/footer"
import Header from "@/src/components/header"
import Services from "@/src/components/services"
import Testimonial from "@/src/components/testimonial"
import type { Metadata } from "next"
import { Toast } from "./toast"

export const metadata: Metadata = {
  title: "Desenvolvimento Web, Sites e Sistemas | Soluções Personalizadas",
  description:
    "Desenvolvimento de sites, sistemas, automações e integrações com WhatsApp. Criação de landing pages, formulários inteligentes e bots de atendimento com preço acessível.",
  keywords:
    "desenvolvimento web, criação de sites, landing page, site com whatsapp, formulários online, sistemas de gestão, automação de processos, integração whatsapp, catálogo online, desenvolvimento rápido, site responsivo, site profissional",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Services />
      <Benefits />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
      <Toast />
    </main>
  )
}
