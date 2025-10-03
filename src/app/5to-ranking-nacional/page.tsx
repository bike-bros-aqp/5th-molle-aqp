'use client'

import RegisterForm from "@/components/form";
import Categorias from "@/components/table";
import Categorias2 from "@/components/table2";
import Image from "next/image"
import Link from "next/link";

const organizadores = [
  {src: "https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271762/logo_bike_bros_thtrsf.png", alt: "logo Bike Bros"},
  {src: "https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271764/logo_only_bikes_p3ryh8.png", alt: "logo Only Bikes"},
]

const apoyo = [
  {src: "https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/logo_federacion_m4nbid.png", alt: "logo Federación"},
  {src: "https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/apoyo_1_hdoweo.png", alt: "logo municipalidad"},
  {src: "https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/logo_mollebaya_p159cw.png", alt: "logo Bike Park"},
  {src: "https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/logo_no_llores_ajpirs.png", alt: "logo no llores"},
]

const uciTable = [
  {name: 'Elite Damas', desde:2006 },
  {name: 'Junior', desde:2008, hasta: 2007 },
  {name: 'Junior Damas', desde:2008, hasta: 2007 },
  {name: 'Elite', desde:2006 },
  {name: 'Master UCI', desde:1990 },
  {name: 'Cadete UCI', desde:2010, hasta: 2009 },
] 

const noUciTable = [
  {name: 'Escuela', desde:2017, hasta: 2015 },
  {name: 'Infantil', desde:2014, hasta: 2013 },
  {name: 'Pre-Cadetes', desde:2012, hasta: 2011 },
  {name: 'Cadetes Promocional', desde:2010, hasta: 2009 },
  {name: 'Junior Promocional', desde:2008, hasta: 2007 },
]

const noUciTable2 = [
  {name: 'Master A', desde:1995, hasta: 1986 },
  {name: 'Master B', desde:1985, hasta: 1976 },
  {name: 'Master C', desde:1975 },
]

const noUciTable3 = [
  {name: 'E-Bike',  text: 'bicicleta eléctrica' },
  {name: 'Novatos', text: 'primera carrera' },
  {name: 'Rigidas', text: 'bicicleta sin suspension trasera' },
  {name: 'Enduro/Semi Pro', text: 'bicicleta de Enduro' },
  {name: 'Elite promocional', text: 'bicicleta de DH' },
  {name: 'Damas Open', text: '' },
]

const costos = [
  {name: 'Preventa 1', desde: '01-OCT', hasta: '08-OCT', costo: '85'},
  {name: 'Preventa 2', desde: '09-OCT', hasta: '16-OCT', costo: '115'},
  {name: 'Regular', desde: '17-OCT', hasta: '31-OCT', costo: '140'},
]

const contacto = [
  {name: 'John J.', numero: '990075670'},
  {name: 'Pablo A.', numero: '974798369'},
]

export default function Inscripcion() {
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center">

    {/*_______________HEADER */}
      <header className="w-full py-3 px-5 bg-black/90 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Image src="https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/ranking_lypkef.png" alt="logo" width={100} height={80}/>
          <a
            className="inline-block rounded-sm border border-current px-6 py-2 text-sm font-medium text-primary transition hover:animate-pulse hover:shadow-xl focus:ring-3 focus:outline-hidden "
            href="#form-register" >
            INSCRIBETE
          </a>
        </div>
      </header>

    {/*_______________MAIN LOGO */}
      <div className="aspect-square flex justify-center max-h-[90vh] p-5 mb-5 md:p-3">
        <img 
          src="https://res.cloudinary.com/dky2ixuo5/image/upload/v1759272271/banner-min_ugiz1q.png" alt="flyer" 
          className="hover:scale-105 transition-transform duration-300 w-full"
        />
      </div>

    {/*_______________ORGANIZA */}
      <div className="flex flex-col items-center p-5 gap-5">
        <p className="text-white font-anton text-xl">Organiza:</p>

        <div className="flex gap-10">
          {
            organizadores.map(({src,alt}, index) => (
              <div className="relative w-24 h-16 md:w-40 md:h-24" key={`org-${index}`}>
                <Image
                  src={src} alt={alt}
                  fill className="object-contain"
                />
              </div>))
          }
        </div>

      </div>

    {/*_______________APOYO */}
      <div className="flex flex-col items-center p-5 gap-4 h-full max-w-4xl">
        <p className="text-white font-anton text-sm">Con el apoyo de:</p>

        <div className="flex w-full justify-between">
          {
            apoyo.map(({src,alt}, index) => (
              <div className="relative w-20 h-10 md:w-36 md:h-20" key={`apo-${index}`}>
                <Image
                  src={src} alt={alt}
                  fill className="object-contain"
                />
              </div>))
          }
        </div>
      </div>

    {/*_______________TABLA UCI*/}
      <div className="flex flex-col items-center p-2 gap-4 w-full max-w-7xl mt-8 mb-5">
        <div className="flex flex-col items-center">
          <p className="text-gray-200 font-anton text-2xl">Categorias</p>
          <p className="text-gray-200 font-anton text-2xl">UCI</p>
        </div>
        <Categorias content={uciTable}/>
      </div>

    {/*_______________TABLA NO UCI*/}
      <div className="flex flex-col items-center p-2 gap-4 w-full max-w-7xl mb-5">
        <div className="flex flex-col items-center">
          <p className="text-gray-200 font-anton text-2xl">Categorias Promocionales</p>
          <p className="text-gray-200 font-anton text-2xl">Sin Carnet</p>
        </div>
        <Categorias content={noUciTable}/>
      </div>

    {/*_______________TABLA NO UCI 2*/}
      <div className="flex flex-col items-center p-2 gap-4 w-full max-w-7xl mb-1">
        <div className="flex flex-col items-center">
          <p className="text-gray-200 font-anton text-2xl">Categorias Promocionales Especiales</p>
          <p className="text-gray-200 font-anton text-2xl">Sin Carnet</p>
        </div>
        <Categorias content={noUciTable2}/>
        <Categorias2  content={noUciTable3}/>
      </div>

    {/*_______________COSTO */}
      <div className="flex flex-col items-center p-2 gap-4 mb-5 ">
        <p className="text-gray-200 font-anton text-2xl">Costo:</p>
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="ltr:text-center rtl:text-right">
            <tr className="text-primary font-bold">
              <th className="px-3 py-2 whitespace-nowrap"></th>
              <th className="px-3 py-2 whitespace-nowrap">DESDE</th>
              <th className="px-3 py-2 whitespace-nowrap">HASTA</th>
              <th className="px-3 py-2 whitespace-nowrap">COSTO</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              costos?.map(({ name, desde, hasta, costo }) => (
                <tr className="*:text-gray-100 *:first:font-medium" key={`costo-${name}`}>  
                  <td className="px-3 py-2 text-center text-sm">{name}</td>
                  <td className="px-3 py-2 text-center text-sm">{desde}</td>  
                  <td className="px-3 py-2 text-center text-sm">{hasta}</td>  
                  <td className="px-3 py-2 text-center text-sm">S/ {costo}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        
        <div className="flex flex-col items-center gap-2 mt-5 ">
          <p className="text-gray-400 font-bold text-lg">Medios de pago:</p>
          <p className="flex gap-2 text-gray-300">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/0/08/Icono_de_la_aplicaci%C3%B3n_Yape.png" width={20} height={20} alt="yapelogo"/>
            990075670
          </p>
          <p className="text-gray-300">BCP: 21591957078031</p>
          <p className="text-gray-300">CCI: 00221519195707803122</p>
          <p className="text-white">JOHN M. JALLO H.</p>
        </div>
      </div>

    {/*_______________CONSULTAS */}
      <div className="flex flex-col items-center p-2 gap-4 mb-5 ">
        <p className="text-gray-200 font-anton text-2xl">Consultas:</p>

        <div className="flex gap-5">
          { contacto.map(({name, numero}, index) => (
            <Link href={`https://wa.me/51${numero}`} target="_blank" key={`contacto-${index}`} className="flex items-center gap-2 text-white mb-2 bg-black/20 px-4 py-2 rounded hover:scale-105 transition-all">  
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#25d366"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
              <span>{name}</span>
            </Link>
          ))
          }
        </div>
      </div>

    {/*_______________FOOTER */}
      <div className="w-full p-2 text-center text-white text-[18px] underline">
        <a href="#">Reglamento</a>
      </div>
    {/*_______________Formulario */}
      <div className="max-w-3xl p-2 mb-5 " id="form-register">
        <RegisterForm />
      </div>

    {/*_______________FOOTER */}
      <footer className="w-full p-2">
        <p className="text-white text-center text-[8px]">
          Desarrollado por  <a href="https://wa.me/51936664619" target="_blank" className="underline" rel="noopener noreferrer">CarlosCoDev</a>
        </p>
      </footer>

    </div>

  );
}
