'use client'

import React, { useState } from 'react'
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import clsx from 'clsx'

interface Props {
  className: string
}

export const Navigation = ({ className }: Props) => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return(
    <header 
      className={
        clsx(
          "z-[100] fixed top-0 left-0 right-0 border-b-2 border-gray-100 bg-white",
          className
        )
      }
    >
      <Container className="flex flex-row items-center justify-between gap-3">
        <div className="">
          <Typography component="h1" className="font-bold text-3xl"><Link href="/">L2FED</Link></Typography>
        </div>
        <nav className="flex items-center gap-6">
          <Typography component="span"><ActiveLink href="/">Générer le QR code</ActiveLink></Typography>
          <Button><Link href="/admin">Checker le QR code</Link></Button>
        </nav>
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
      </Container>
    </header>
  )
}