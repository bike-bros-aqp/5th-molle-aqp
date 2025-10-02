import { badResponse, genUrl, goodResponse } from "@/helpers/api"





export async function GET() { 
  const url = genUrl("type","info")
  try{  
    const res = await fetch(url)
    const data = await res.json()
    return goodResponse('Datos generados correctamente',data)

  }catch(err){
    return badResponse({err})
  }
}