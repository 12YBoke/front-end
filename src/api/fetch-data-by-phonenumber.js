import supabase from "../config/supabaseClient"

export const fetchDataByPhonenumber = async (phonenumber) => {
  const { data , error } = await supabase
    .from('user')
    .select('scanned')
    .eq('phonenumber', phonenumber)

  if(data) {
    return data
  }
}