import aes from 'crypto-js/aes'

export const Encrypt = (text) => {
  const result = aes.encrypt(text , 'l2fed').toString()
  return(
    result
  )
} 

export const Decrypt = (text) => {
  const bytes = aes.decrypt(text , 'l2fed')
  const result = bytes.toString(CryptoJS.enc.Utf8);
  return(
    result
  )
} 
