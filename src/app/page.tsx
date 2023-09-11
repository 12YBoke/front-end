'use client'

import { Container } from "@/ui/components/container/container"
import { RegisterForm } from "@/ui/components/register-form/register-form"
import { Typography } from "@/ui/design-system/typography/typography"

export default function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="md:flex-1">
          <Container>
            <Typography component="h1" className="font-bold text-3xl">
              Formulaire d'enregistrement
            </Typography>
          </Container>
          <Container>
            <Typography component="p" className="">
              Renseignez vos informations sur le formulaire ci-bas afin de pouvoir generer votre QR Code 
            </Typography>
          </Container>
          <Container>
            <RegisterForm/>
          </Container>
        </div>
        <div className="md:flex-1"> bonjour</div>
      </div>
    </>
  )
}
