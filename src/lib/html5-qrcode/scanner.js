'use client'

import { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

export const Scanner = () => {
  const [scanResult, setScanResult] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('lecteur', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 2
    })

    scanner.render(success, error)
  
    function success(result) {
      scanner.clear()
      setScanResult(result)
    }
  
    function error(err) {
      console.log(err);
    }
  }, [])

  if(scanResult) {
    return scanResult
  } else {
    return ( <div id='lecteur'></div> )
  }

}