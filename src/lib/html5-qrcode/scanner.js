'use client'

import { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

export const Scanner = (props) => {
  const [scanResult, setScanResult] = useState(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('lecteur', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 10
    })

    scanner.render(success, error)
  
    function success(result) {
      scanner.clear()
      setScanResult(result)
    }
  
    function error(err) {
    }
  }, [])

  if(scanResult) {
    return {
      result : {
        data : scanResult,
        component : 
        <div className='w-full h-full flex items-center justify-center'>Scanner a nouveau</div>
      }
    }
  } else {
    return {
      result : {
        data : null,
        component : <div className='w-full h-full' id='lecteur'></div>
      }
    }
  }

}
