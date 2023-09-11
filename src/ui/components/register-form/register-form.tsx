import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

interface Props {
}

export const RegisterForm = ({}: Props) => {

  const formSchema = z.object({
    lastname: z.string()
      .min(2, {
        message: "Votre nom de famille doit avoir au moin 2 caracteres.",
      })
      .max(50),
    firstname: z.string()
      .min(2, {
        message: "Votre prenom doit avoir au moin 2 caracteres.",
      })
      .max(50),
    phonenumber: z.string()
      .regex(new RegExp('^0(8|9)[0-9]{8}$'), {
        message: "Veuillez entrer un numero de telephone valide"
      })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      phonenumber: ""
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de téléphone</FormLabel>
              <FormControl>
                <Input placeholder="(08 ou 09)** *** ***" {...field} />
              </FormControl>
              <FormDescription>
                Votre numero doit commencer par 0
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enregistrez et téléchargez le QR Code</Button>
      </form>
    </Form>
  )
}