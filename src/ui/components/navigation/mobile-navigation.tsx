'use client'

import React, { useState } from 'react'
import { Container } from "../container/container"
import { Typography } from "@/ui/components/typography/typography"
import { Button } from '@/components/ui/button'
import Link from "next/link"
import { ActiveLink } from "./active-link"
import clsx from 'clsx'
interface Props {
  className: string
}

export const MobileNavigation = ({ className }: Props) => {

  const [navbarOpen, setNavbarOpen] = useState(false)


  return(
    <header
      className={
        clsx(
          "z-[100] fixed top-0 left-0 right-0 border-b-[1px] border-slate-50 bg-white",
          className
        )
      }
    >
      <Container className="flex flex-row items-center justify-between gap-3">
        <Typography component="h1" className="font-bold text-3xl"><Link href="/">L2FED</Link></Typography>
    
        {/* Burger Button Menu */}
        <button
          className='md:hidden'
          onClick={() => {
            if(navbarOpen) {
              setNavbarOpen(false)
            } else {
              setNavbarOpen(true)
            }
          }}
        >
          <div className={navbarOpen ? 'active burger' : 'burger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        {/* Mobile Menu */}
        <div 
          className={
            clsx(
              navbarOpen ? 'right-0' : ' right-[-80vw] ',
              'md:hidden border-l-[1px] border-slate-50 px-4 absolute block h-[90vh] w-[80vw] z-[100] pt-6 top-[8vh] bg-white animate'
            )
          }
        >
          <nav className="flex flex-col items-start gap-6">
            <Typography component="span"><ActiveLink href="/">Générer le QR code</ActiveLink></Typography>
            {/* <Typography component="span"><ActiveLink href="/recover-qrcode">Récupérer le QR code</ActiveLink></Typography> */}
            <Button><Link href="/admin">Checker le QR code</Link></Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}