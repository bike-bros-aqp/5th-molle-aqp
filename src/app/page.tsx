'use client'

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function Home() {

  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-[#FFB106]">
      <div className="h-2 mb-15">
        <Image src='https://res.cloudinary.com/dky2ixuo5/image/upload/v1759271762/logo_bike_bros_thtrsf.png' alt="logo"  width={100} height={100}/>
      </div>

      <div className="flex flex-col items-center gap-8 text-center">
        <div className="w-64 h-64 flex items-center justify-center border-4 border-[#FFB106] rounded-full overflow-hidden bg-white">
          <DotLottieReact  
            src="https://lottie.host/99b934db-9064-4c1b-967e-c0605f3f38bb/HHUXnVIzr1.lottie"
            loop
            autoplay
          />
        </div>


        <div className="space-y-3 max-w-md">
          <h1 className="text-4xl font-bold tracking-wide">
            WORK IN PROGRESS
          </h1>
          <p className="text-[#FFB106]/80">
            Estamos trabajando en esta sección para ofrecerte una mejor experiencia.
          </p>
        </div>
      </div>
    </div>
  )
  
}
