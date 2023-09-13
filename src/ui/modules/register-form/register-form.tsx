'use client'

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { RegisterFormFieldsType } from "@/types/forms"
import { registerData } from '@/api/register-data'
import { InputField } from "@/ui/components/input-field/input-field"

export const RegisterForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof RegisterFormFieldsType>>({
    resolver: zodResolver(RegisterFormFieldsType),
    defaultValues: {
      lastname: "",
      firstname: "",
      phonenumber: ""
    },
  })
 
  async function onSubmit(values: z.infer<typeof RegisterFormFieldsType>) {

    const { firstname, lastname, phonenumber } = values

    const result = await registerData(firstname, lastname, phonenumber)    

    if(result != null) {
      if(result?.error?.code === '23505') {
        toast({
          variant: "destructive",
          title: "Numero de téléphone",
          description: "Votre numéro figure déjà dans nos données. Veuillez renseignez un autre ou nous contacter pour gérer ce problème",
        })
      } else {
        toast({
          variant: "destructive",
          title: "Oups !",
          description: "Une erreur est survenue. Veuillez vérifier votre connexion et réessayer.",
        })
      }
    } else {
      toast({
        title: "Super !",
        description: "Vos informations ont bien ete enregistré. Téléchargement du QR Code en cours.",
        className: "bg-green-200 border-green-100"
      })
    }
  }
  
  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          control={form.control}
          name='firstname'
          label='Prénom'
          placeholder='John'
        />
        <InputField
          control={form.control}
          name='lastname'
          label='Nom'
          placeholder='Doe'
        />
        <InputField
          control={form.control}
          name='phonenumber'
          label='Numéro de telephone'
          placeholder='(08 ou 09)** *** ***'
          description="Votre numero doit commencer par 0"
        />
        <Button type="submit">Enregistrez et téléchargez le QR Code</Button>
      </form>
    </Form>
  )
}