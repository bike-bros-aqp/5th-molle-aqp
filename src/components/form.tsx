'use client';
import { getLocal, setLocal } from "@/helpers/storage";
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import LoadingInfo from "./loading";

type Inputs = {
  uci: boolean,
  gender: 'H' | 'M',
  birthYear: number,
  dni: number,  
  category: string,
  lastName: string,
  firstName: string,
  phone: number,
  email: string,
  city: string,
  nationality?: string,
  team?: string,
  guardianInfo?: string,
  paymentOperationNumber: number,
  paymentReceipt: FileList ,
  inAllergys: boolean,
  inBloodType: boolean,
  inEmerencyContact: boolean,
  allergies?: string,
  bloodType?: string,
  emergencyContact?: string,
}

type Category = {
  uci: boolean,
  categoria: string,
  desde: number | '',
  hasta: number | '',
  sexo: 'M' | 'F',
}
type BaseInfo = {
  conditions: Category[],
  list: string[],
}
const initialBaseInfo: BaseInfo = {
  conditions: [],
  list: [],
}

const nowYear = new Date().getFullYear();

const defaultValues = {
  'category' : '',
  'bloodType': ''
}


export default function Home() {
  const {register,handleSubmit,
    formState:{errors},
    watch, reset
  } = useForm<Inputs>({defaultValues})

  const [baseInfo, setBaseInfo] = useState<BaseInfo>(initialBaseInfo);
  const [loading, setLoading] = useState(true);

  // --------------------- Registro de informacion
  useEffect(() => {
    const localBaseInfo = getLocal('baseInfo') as BaseInfo
    if(localBaseInfo){
      setBaseInfo(localBaseInfo)
      setLoading(false)
      return
    }
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch('/api/info')
      const data = await res.json()
      if(!data?.success)  return window.alert('Por favor refrezca la pagina')

      const conditions = data?.conditions || []
      const list = data?.list || []
      setBaseInfo({conditions,list})
      setLocal('baseInfo',{conditions,list})
      setLoading(false)
    }
    fetchData()
  },[])
  

  // --------------------- Envio de formulario
  const onSubmit =  handleSubmit((data) => {
    const lista = baseInfo.list
    const dni = (+watch('dni')).toString(32)

    if(lista.includes(dni)){
      window.alert('El DNI ya se encuentra registrado....')
      return
    }


    const body:object = {...watch()};



    const fecthData = async () => {
      setLoading(true)
      const file = watch('paymentReceipt')[0]
      const array = await file.arrayBuffer()
      const bytes = Array.from(new Uint8Array(array))
      const name = file.name


      const res =  await fetch('/api/info',{
          method: 'POSt',
          body: JSON.stringify({...body, paymentReceipt:{bytes,name}})
        })
      const data = await res.json()
      console.log(data)
      setLoading(false)

      window.alert(data?.data?.msg)
      if(data?.data?.success) reset()
    }
    fecthData()
  });

  return ( 
    <div className="w-full font-oswald mt-5 ">
      <h1 className="text-3xl  text-white text-center mb-6 font-bold">
        PART<span className="text-orange-600">ICIPA</span>
      </h1>
    
      {loading && <LoadingInfo/>}

      <form action="" onSubmit={onSubmit}
        className="flex flex-col gap-4 w-full mt-5 font-oswald h-auto bg-zinc-900/50 rounded-lg p-4 border-zinc-800 border "
      >
      {/* ------------------------------------------------------------------------------------------------- UCI AÑO HOmbre/Mujer */}
        <div className="flex gap-3 justify-between w-full h-8"> 
          <div className="flex gap-2 justify-center items-center h-full w-1/5 cursor-pointer">
            <input type="checkbox" id="inUCI" className=" h-full checked:accent-orange-600 cursor-pointer border-none" 
              {...register('uci')}
              />
            <label htmlFor="inUCI" className="text-zinc-500 font-bold text-xl cursor-pointer">Federado|UCI</label>
          </div>
          <div className="w-1/2 flex gap-1 items-center h-full border border-zinc-700 bg-zinc-800 p-2 rounded justify-center ">
            <input type="radio" value="M" id="inHombre" className="checked:accent-orange-600 cursor-pointer"
              {...register('gender',
                { 
                  required: {value: true, message: 'Debe seleccionar un genero'}, 
                }
              )}
              />
            <label className="mx-1 text-zinc-500 cursor-pointer" htmlFor="inHombre">Hombre</label>
            <input type="radio" value="F" id="inMujer" className="checked:accent-orange-600 cursor-pointer"
              {...register('gender')}
            />
            <label className="mx-1 text-zinc-500 cursor-pointer" htmlFor="inMujer">Mujer</label>
          </div>
          <input type="number" placeholder="Año Nacimiento"
            className="w-1/2 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500 text-center"
            {...register('birthYear',
              { 
                required: {value: true, message: 'Debe ingresar su año de nacimiento'},
                validate: {
                  length: val => val.toString().length === 4 || 'El año debe tener 4 dígitos',
                  range:  val => (val >= 1900 && val <= nowYear) || `El año debe estar entre 1900 y ${nowYear}`
                }
              }
            )}
          />
        </div>

      {/* ------------------------------------------------------------------------------------------------- DNI Categoria */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="number" placeholder="DNI"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('dni',
              { 
                required: { value: true, message: 'Debe ingresar su numero de dni'},
                validate: {
                  length: val => val.toString().length === 8 || 'El DNI debe tener 8 dígitos'
                }
              }
            )}
          />
          <div className="w-2/3 h-full">
            <select
              className="w-full h-full rounded bg-zinc-800 border border-zinc-700 text-zinc-500 focus:ring-2 focus:ring-orange-600 outline-none"
              {...register('category',
                { 
                  required: { value: true, message: 'Debe seleccionar una categoría' } 
                }
              )}
            >
              <option disabled hidden value=''>- Categoria -</option>
              {
                (watch('gender') && watch('birthYear')) && baseInfo.conditions.filter(({uci,desde,hasta,sexo}) => {
                  const valUci = watch('uci') == uci
                  const valSexo = watch('gender') == sexo
                  const edad = nowYear - watch('birthYear')
                  const valDesde = !desde || (edad >= desde) 
                  const valHasta = !hasta || (edad <= hasta)
                  return valDesde && valHasta && valUci && valSexo
                }).map( (cat, index) => (
                  <option key={index+cat.categoria} value={cat.categoria}>{cat.categoria}</option>
                ))
              }
            </select>
          </div>
        </div>

      <hr className="border-zinc-600 w-11/12 mx-auto"/>

      {/* ------------------------------------------------------------------------------------------------- Apellidos y Nombres */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="text" placeholder="Apellidos"
            className="w-1/2 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('lastName',
              { 
                required: { value: true, message: 'Debe ingresar sus apellidos'},
                maxLength: { value: 50, message: 'El máximo de caracteres en su apellido es 50' },
              }
            )}
            />
          <input type="text" placeholder="Nombres"
            className="w-1/2 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('firstName',
              { 
                required: { value: true, message: 'Debe ingresar sus nombres'},
                maxLength: { value: 50, message: 'El máximo de caracteres en su nombre es 50' }
              }
            )}
          />
        </div>

      {/* ------------------------------------------------------------------------------------------------- Telefono y correo */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="number" placeholder="Teléfono +51"
            className="w-2/5 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('phone',
              { 
                required: { value: true, message: 'Debe ingresar su número de teléfono'},
                validate: {
                  length: val => val.toString().length >= 9 || 'El télefono debe tener al menos 7 dígitos',
                  start: val => val.toString().startsWith('9') || 'El télefono debe empezar con 9'
                } 
              }
            )}
          />
          <input type="email" placeholder="Correo"
            className="w-3/5 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('email',
              { 
                required: { value: true, message: 'Debe ingresar su correo electronico' },
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: 'Debe ingresar un correo electrónico válido' } 
              }
            )}
          />
        </div>

      {/* ------------------------------------------------------------------------------------------------- Ciudad Nacionalidad Equipo */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="text" placeholder="Ciudad"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('city',
              { 
                required: { value: true, message: 'Debe ingresar su ciudad de origen'} 
              }
            )}
          />
          <input type="text" placeholder="Nacionalidad"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('nationality')}
          />
          <input type="text" placeholder="Equipo"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('team')}
          />
        </div>

      {/* ------------------------------------------------------------------------------------------------- Datos del apoderado */}
        {
          watch('birthYear') && (nowYear - watch('birthYear') < 18) && (
            <textarea placeholder="Datos del apoderado"
              className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
              {...register('guardianInfo',
                {
                  required: { value: (nowYear - watch('birthYear'))<18 , message: 'Debe ingresar los datos del apoderado' } 
                }
              )}
            />)
        }

      {/* ------------------------------------------------------------------------------------------------- Constancia de pago */}
        <div className="flex gap-3 justify-between w-full h-8 items-center">  
          <label className="mx-1 text-zinc-500 w-1/5 text-center" htmlFor="inNumOp">Pago: </label>

          <input type="number" placeholder="Numero Operacion" id="inNumOp"
            className="w-2/5 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
            {...register('paymentOperationNumber',
              { 
                required: { value: true, message: 'Debe ingresar su número de operación'}
              }
            )}
          />
          <div className="w-2/5 rounded bg-zinc-200 border border-none text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500 cursor-pointer flex justify-center items-center hover:font-bold">
            <label htmlFor="inFile" className="text-zinc-500 cursor-pointer ">Constancia 📁</label>
            <input type="file" id="inFile" className="hidden"
              {...register('paymentReceipt',
                {
                  required: {value: true, message: 'Debes ingresar la constancia de pago'},
                  validate: {
                    espacio: files => files[0]?.size <= 1024**2 || 'El archivo debe ser menor a 1MB'
                  }
                }
              )}
            />
          </div>
        </div>

      <hr className="border-zinc-600 w-11/12 mx-auto"/>


      {/* ------------------------------------------------------------------------------------------------- Datos adicionales */}
        <div className="flex flex-col gap-3 justify-between w-full">  
          <p className="text-lg text-zinc-500">Deseas dejar los siguientes datos?</p>

          <div className="flex gap-2 w-full justify-evenly">

            <div className="flex gap-2 justify-center items-center h-full ">
              <input type="checkbox" id="inAlergias" className=" h-full checked:accent-orange-600 cursor-pointer"
                {...register('inAllergys')} />
              <label htmlFor="inAlergias" className="text-zinc-500 font-bold cursor-pointer">Alergias</label>
            </div>
            <div className="flex gap-2 justify-center items-center h-full ">
              <input type="checkbox" id="inSangre" className=" h-full checked:accent-orange-600 cursor-pointer"
                {...register('inBloodType')} />
              <label htmlFor="inSangre" className="text-zinc-500 font-bold cursor-pointer">Tipo Sangre</label>
            </div>
            <div className="flex gap-2 justify-center items-center h-full ">
              <input type="checkbox" id="inEmergencia" className=" h-full checked:accent-orange-600 cursor-pointer" 
                {...register('inEmerencyContact')}/>
              <label htmlFor="inEmergencia" className="text-zinc-500 font-bold cursor-pointer">Contacto de emergencia</label>
            </div>

          </div>

          <div className="flex gap-2 w-full justify-between">
           { (watch('inAllergys') || watch('inBloodType')) && (
             <div className="flex gap-3 justify-between w-full h-8">
              {
                watch('inAllergys') && (              
                  <input type="text" placeholder="Alergias"
                    className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
                    {...register('allergies',
                      {
                        required: { value: watch('inAllergys'), message: 'Debe ingresar sus alergias' }
                      }
                    )}
                  />)
              }
              {
                watch('inBloodType') && (
                  <select
                    className="w-full h-full rounded bg-zinc-800 border border-zinc-700 text-zinc-500 focus:ring-2 focus:ring-orange-600 outline-none"
                    {...register('bloodType',
                      { 
                        required: { value: watch('inBloodType'), message: 'Debe seleccionar un tipo de sangre' } 
                      }
                    )}
                  >
                    <option value='' hidden disabled>- Tipo de Sangre -</option>
                    {
                      ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map( (type, index) => (
                        <option key={type+index} value={type}>{type}</option>
                      ))
                    }
                  </select>
                )
              }
            </div>)}
          </div>
         { watch('inEmerencyContact') && (
           <textarea placeholder="Contacto de emergencia"
              className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
              {...register('emergencyContact',
                { required: { value: watch('inEmerencyContact'), message: 'Debe ingresar los datos de su contacto de emergencia'} }
              )}
          />
          )}
        </div>


      {/* ------------------------------------------------------------------------------------------------- Enviar */}
        <input type="submit" placeholder="ENVIAR" className="p-2 bg-orange-600 w-1/5 min-w-24 mx-auto rounded cursor-pointer hover:scale-110 transition-all uppercase hover:font-bold"/>
      </form>

      {/* ------------------------------------------------------------------------------------------------- ERRORES */}
      {
        errors && (
          <div className="w-full mt-5 font-oswald font-normal" >
            {
              Object.values(errors).map( (key, index) => (
                <p key={index} className="text-red-400 text-center font-bold" >{key?.message}</p>
              ))
            }
          </div>
        )
      }
    </div>
  );
}
