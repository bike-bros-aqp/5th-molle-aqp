import { NextResponse } from "next/server"



export const goodResponse = (message:string,data?:Object) => {
  return NextResponse.json({message,data},{status:200})
}

export const badResponse = (err:Object) => {
  return NextResponse.json(err,{status:400})
}

export const errorResponse = (message:string,err?:Object) => {
  throw new Error(JSON.stringify({message,...err},null,2)) 
}


type KeyUrl = 'type'
type ValueUrl = 'info'

export const genUrl = (key:KeyUrl,value:ValueUrl) => {
  return `${process.env.URL}?${key}=${value}`
}