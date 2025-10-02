import { NextResponse } from "next/server"



export const goodResponse = (data:object) => {
  return NextResponse.json(data,{status:200})
}

export const badResponse = (err:object) => {
  return NextResponse.json(err,{status:400})
}

export const errorResponse = (message:string,err?:object) => {
  throw new Error(JSON.stringify({message,...err},null,2)) 
}


type KeyUrl = 'type'
type ValueUrl = 'info' | 'participantes'

export const genUrl = (key:KeyUrl,value:ValueUrl) => {
  return `${process.env.URL}?${key}=${value}`
}