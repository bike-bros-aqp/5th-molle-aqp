'use client'

import RegisterForm from "@/components/form";
import Image from "next/image"

export default function Inscripcion() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 space-y-8 gap-10">
      <Image src="https://res.cloudinary.com/dky2ixuo5/image/upload/v1759208036/flyer_b_vtn8xj.png" alt="flyer" width={400} height={400} />
      <RegisterForm />
    </div>

  );
}
