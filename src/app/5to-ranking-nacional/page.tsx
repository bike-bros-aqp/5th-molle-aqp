'use client'

import Categorias from "@/components/table";
import Image from "next/image"

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
  {name: 'Elite', desde:2006 },
  {name: 'Master UCI', desde:1990, hasta: 1986 },
] 

const noUciTable = [
  {name: 'Escuela', desde:2017, hasta: 2015 },
  {name: 'Infantil', desde:2014, hasta: 2012 },
  {name: 'Cadetes', desde:2011, hasta: 2009 },
  {name: 'Master A', desde:1995, hasta: 1986 },
  {name: 'Master B', desde:1985, hasta: 1976 },
  {name: 'Master C', desde:1975 },
  {name: 'E-Bike',  },
  {name: 'Novatos',  },
  {name: 'Rigidas',  },
  {name: 'Enduro',  },
  {name: 'Elite \n Promocional',  },
]

const costos = [

]

export default function Inscripcion() {
  return (
    <div className="w-full flex flex-col min-h-screen items-center">

    {/*_______________HEADER */}
      <header className="w-full py-3 px-5 bg-black/90 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Image src="https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271763/ranking_lypkef.png" alt="logo" width={100} height={80}/>
          <a
            className="inline-block rounded-sm border border-current px-6 py-2 text-sm font-medium text-primary transition hover:animate-pulse hover:shadow-xl focus:ring-3 focus:outline-hidden "
            href="#" >
            REGISTRATE
          </a>
        </div>
      </header>

    {/*_______________MAIN LOGO */}
      <div className="w-full flex justify-center max-w-4xl p-5 md:p-0">
        <Image 
          src="https://res.cloudinary.com/dky2ixuo5/image/upload/v1759272271/banner-min_ugiz1q.png" alt="flyer" 
          width={700} height={600}
          className="hover:scale-105 transition-transform duration-300"
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
      <div className="flex flex-col items-center p-5 gap-4 w-full max-w-4xl">
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
      <div className="flex flex-col items-center p-2 gap-4 w-full max-w-7xl mb-5">
        <p className="text-gray-200 font-anton text-2xl">Categorias UCI:</p>
        <Categorias content={uciTable}/>
      </div>

    {/*_______________TABLA NO UCI*/}
      <div className="flex flex-col items-center p-2 gap-4 w-full max-w-7xl">
        <p className="text-gray-200 font-anton text-2xl">Categorias Sin Carnet:</p>
        <Categorias content={noUciTable}/>
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

          <tr className="*:text-gray-100 *:first:font-medium" key={`row-${name}`}>
            <td className="px-3 py-2 text-center text-sm">Preventa 1</td>
            <td className="px-3 py-2 text-center text-sm">01-OCT</td>  
            <td className="px-3 py-2 text-center text-sm">10-OCT</td>  
            <td className="px-3 py-2 text-center text-sm">S/ 85</td>  
          </tr>
        </tbody>
      </table>

      </div>

    {/*_______________FOOTER */}
      <footer className="w-full p-2 bg-black">
        <p className="text-white text-center text-[10px]">
          Desarrollado por  <a href="https://wa.me/51936664619" target="_blank" className="underline" rel="noopener noreferrer">CarlosCoDev</a>
        </p>
      </footer>

      {/* <RegisterForm /> */}
    </div>

  );
}
