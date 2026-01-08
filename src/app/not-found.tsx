'use client'

import Link from "next/link"
import { redirect } from "next/navigation"

export default function Error() {
  redirect('/')
  

  return(
    <main className="grid min-h-dvh place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#FFB106]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Ups!!
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Disculpa, no podemos encontrar la ruta que estas buscando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#FFB106] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}