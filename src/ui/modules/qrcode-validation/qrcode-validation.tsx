'use client'

import { Decrypt } from '@/lib/crypto/crypto'
import { Scanner } from '@/lib/html5-qrcode/scanner'
import { Container } from '@/ui/components/container/container'
import { useEffect, useState } from 'react'
import { setScannedValue } from '@/api/set-scanned-value'
import { fetchDataByPhonenumber } from '@/api/fetch-data-by-phonenumber'
import { Typography } from '@/ui/components/typography/typography'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

export const QrcodeValidation = () => {
  const [encryptedInformation,setEncryptedInformation] = useState<string | null>(null)
  const [decryptedInformation,setDecryptedInformation] = useState<string | null>(null)
  const [decryptedInformationArray,setDecryptedInformationArray] = useState<string[] | null>()
  const [firstname, setFirstname] = useState<string | null>(null)
  const [lastname, setLastname] = useState<string | null>(null)
  const [phonenumber, setPhonenumber] = useState<string | null>(null)
  const [scanned, setScanned] = useState< {scanned: boolean} | undefined >()
  const result = Scanner()
  const qrcodeInformation = result?.result.data
  
  useEffect(() => {
    if(qrcodeInformation != null) {
      setEncryptedInformation(qrcodeInformation)

      if(encryptedInformation != null) {
        const transit = Decrypt(encryptedInformation)
        setDecryptedInformation(transit)
        setDecryptedInformationArray(decryptedInformation?.split('%'))
      }
    }
  }, [
    qrcodeInformation, 
    encryptedInformation, 
    decryptedInformation
  ])

  useEffect(() => {
    if(decryptedInformationArray?.length === 3) {
      setFirstname(decryptedInformationArray[0])
      setLastname(decryptedInformationArray[1])
      setPhonenumber(decryptedInformationArray[2])

    } else {
    }
  }, [decryptedInformationArray])

  useEffect(() => {
    const fetch = async () => {
      if(phonenumber) {
        const result = await fetchDataByPhonenumber(phonenumber)
        setScanned(result)
      }
    }

    fetch()
  }, [phonenumber, scanned])

  async function onClick() {
    const result = await setScannedValue(phonenumber)
    if(result != null) {
      toast({
        variant: "destructive",
        title: "Oups !",
        description: "Une erreur est survenue. Veuillez vérifier votre connexion et réessayer.",
      })

      setScanned({ scanned : false })

    } else {
      toast({
        title: "Super !",
        description: "QR code scanné",
        className: "bg-green-200 border-green-100"
      })

      setScanned({ scanned : true })
    }
  } 

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='bg-slate-50 md:flex-1 h-[50vh] md:h-[90vh] flex flex-col justify-center'>
        <Container>
          {result?.result.component}
        </Container>
      </div>
      <div className='md:flex-1 md:h-90[vh] flex flex-col justify-center'>
        <Container className='flex flex-col items-center justify-center w-full h-full'>
          {
            firstname && lastname && phonenumber ?
            <>
              <Typography className='text-slate-400'>Résultat</Typography>
              <Typography className='text-slate-400'>Prénom : <span className='text-slate-900'>{firstname}</span></Typography>
              <Typography className='text-slate-400'>Nom : <span className='text-slate-900'>{lastname}</span></Typography>
              <Typography className='text-slate-400'>Numéro de téléphone : <span className='text-slate-900'>{phonenumber}</span></Typography>
              <Typography className='text-slate-400'>
                status du QR code :{' '}
                {
                  scanned === undefined ?
                  <span className='text-slate-400'>Chargement ...</span>
                  :
                  scanned.scanned ?
                    <span className='text-green-800 font-bold'>Scanné</span>
                    :
                    <span className='text-red-800 font-bold'>En attente</span>
                  
                }
              </Typography>
              <div className='py-5'>
              {
                scanned === undefined ?
                  <Button
                    disabled = {true}
                  >
                    Valider le QR code
                  </Button>
                :
                scanned.scanned ?
                    <Button
                      disabled = {true}
                    >
                      Valider le QR code
                    </Button>
                  :
                    <Button
                      disabled = {false}
                      onClick={() => {onClick()}}
                    >
                      Valider le QR code
                    </Button>
              }
              </div>

            </>
            :
            <Typography className='text-slate-400'>Veuillez presenter un QR code valide</Typography>
          }
        </Container>
      </div>
    </div>
  )
}