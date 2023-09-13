import { downloadImg } from '@/utils/download-img'
import QRCode from 'qrcode'
import { Encrypt } from '../crypto/crypto'

export const Qrcode = async (
  firstname,
  lastname,
  phonenumber
) => {
  const encryptedText = Encrypt(firstname + '%' + lastname + '%' + phonenumber)
  try {
    const url = await QRCode.toDataURL(
      encryptedText,
      {
        scale: 20
      }
    )
    downloadImg(url, firstname, lastname)
  } catch (err) {
    console.error(err)
  }
  
}