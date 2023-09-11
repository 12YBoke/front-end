import * as z from "zod"

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
    .regex(new RegExp('^(8|9)[0-9]{8}$'), {
      message: "Veuillez entrer un numero de telephone valide"
    })
})

export default formSchema