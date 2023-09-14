'use client'

import { Typography } from "@/ui/components/typography/typography"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import clsx from 'clsx'
import { Button } from '@/components/ui/button'

interface Props {
  className: string
}

export const Navigation = ({ className }: Props) => {

  return(
    <header 
      className={
        clsx(
          "z-[100] fixed top-0 left-0 right-0 border-b-[1px] border-slate-50 bg-white",
          className
        )
      }
    >
      <div className="flex flex-row items-center justify-between px-16 py-2">
        <Typography component="h1" className="font-bold text-3xl"><Link href="/">L2FED</Link></Typography>
        <nav className="flex items-center gap-6">
          <Typography component="span"><ActiveLink href="/">Générer le QR code</ActiveLink></Typography>
          {/* <Typography component="span"><ActiveLink href="/recover-qrcode">Récupérer le QR code</ActiveLink></Typography> */}
          <Button><Link href="/admin">Checker le QR code</Link></Button>
        </nav>
      </div>
    </header>
  )
}