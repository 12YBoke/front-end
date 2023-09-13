import supabase from "../config/supabaseClient"

export const registerData = async (firstname, lastname, phonenumber) => {
  const { data, error } = await supabase
    .from('user')
    .insert([{ firstname, lastname, phonenumber }])
  
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
