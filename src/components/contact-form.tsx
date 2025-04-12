"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { toast } from "@/src/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { formatDate } from "../lib/utils"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"


const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 dígitos" }),
  service: z.string().min(1, { message: "Descreva o serviço" }),
  date:z.string(),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: formatDate(new Date()),
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
    
      if (!response.ok) {
        return toast({
          title: "Erro ao enviar formulário",
          description: `${result.message}` || 'Erro ao enviar dados.',
          variant: "destructive",
        })
      }
  
      toast({
        title: "Enviado com sucesso!",
        description: "Entraremos em contato em breve.",
      })
     } catch (error:any) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
     }finally {
      setIsSubmitting(false)
      form.reset()
     }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-card rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-center text-black dark:text-white">Solicite um orçamento</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black dark:text-white">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black dark:text-white">Email</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black dark:text-white">Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black dark:text-white">Descrição breve do serviço solicitado</FormLabel>
                <FormControl >
                  <Textarea placeholder="Descreva..."  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         

          <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar solicitação"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
