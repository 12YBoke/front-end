import supabase from "../config/supabaseClient"

export const setScannedValue = async (phonenumber) => {
  const scanned = true
  const { data , error } = await supabase
    .from('user')
    .update({scanned})
    .eq('phonenumber', phonenumber)

  if(error) {
    return {
      error: {
        code : error.code,
        message : error.message
      }
    }
  }
  if(data) {
    return {
      error: null
    }
  }
}