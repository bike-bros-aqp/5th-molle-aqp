import { badResponse, genUrl, goodResponse } from "@/helpers/api"

const msg = `
  Registro exitoso!!

  Validaremos la informacion y confirmaremos tu participacion via correo o whatsapp.
`

export async function POST(request:Request) {
  const body = await request.json()
  const url = genUrl('type','participantes')
  try{  
    const res = await fetch(url,{
      
      method: 'POST',
      body: JSON.stringify(body)
    })
    const data = await res.json()
    console.log(data)
    return goodResponse({data})

  }catch(err){
    return badResponse({err})
  }
  
}


export async function GET() { 
  const url = genUrl("type","info")
  try{  
    const res = await fetch(url)
    const data = await res.json()

    if(data?.success){
      return goodResponse(data)
    }
    


  }catch(err){
    return badResponse({err})
  }
}