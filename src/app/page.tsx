'use client'

import { Container } from "@/ui/components/container/container"
import { RegisterForm } from "@/ui/components/register-form/register-form"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import Link from "next/link"
import l2fed from "../../public/assets/images/l2fed.jpeg"

export default function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="md:flex-1 h-[89vh] flex flex-col justify-center">
          <Container>
            <Typography component="h1" className="font-bold text-2xl">
              Formulaire d'enregistrement
            </Typography>
          </Container>
          <Container>
            <Typography component="p" className="">
              Renseignez vos informations sur le formulaire ci-dessous afin de pouvoir générer votre QR Code 
            </Typography>
          </Container>
          <Container>
            <RegisterForm/>
          </Container>
          <Container>
            <Typography component="p" className="text-slate-400">
              Vous avez perdu votre QR Code ?
              <br/>Suivez le {' '}
              <span className="cursor-pointer text-slate-800 font-bold rounded">
                <Link href='/recover-qrcode'>lien</Link>
              </span> 
              {' '} pour le recuperer.
            </Typography>
          </Container>
        </div>
        <div className="md:flex-1 md:h-[89vh] flex flex-col md:justify-center">
          <Container>
            <Image
              src={l2fed}
              alt="qrcode l2fed url address"
            />
          </Container>
        </div>
      </div>
    </>
  )
}
