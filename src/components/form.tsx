'use client';

export default function Home() {
  return ( 
    <div className="w-full bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 font-oswald ">
      <h1 className="text-3xl  text-white text-center mb-6 font-bold">
        PART<span className="text-orange-600">ICIPA</span>
      </h1>


      {/* FORM FINAL */}
      <form action=""
        className="flex flex-col gap-4 w-full mt-5 font-oswald h-auto"
      >
      {/* UCI AÑO HOmbre/Mujer */}
        <div className="flex gap-3 justify-between w-full h-8"> 
          <div className="flex gap-2 justify-center items-center h-full w-1/5 cursor-pointer">
            <input type="checkbox" id="inUCI" className=" h-full checked:accent-orange-600 cursor-pointer border-none" />
            <label htmlFor="inUCI" className="text-zinc-500 font-bold text-xl cursor-pointer">UCI</label>
          </div>
          <div className="w-1/2 flex gap-1 items-center h-full border border-zinc-700 bg-zinc-800 p-2 rounded justify-center ">
            <input type="radio" name="sexo" value="Hombre" id="inHombre" className="checked:accent-orange-600 cursor-pointer"/>
            <label className="mx-1 text-zinc-500 cursor-pointer" htmlFor="inHombre">Hombre</label>
            <input type="radio" name="sexo" value="Mujer" id="inMujer" className="checked:accent-orange-600 cursor-pointer"/>
            <label className="mx-1 text-zinc-500 cursor-pointer" htmlFor="inMujer">Mujer</label>
          </div>
          <input type="text" placeholder="Año Nacimiento"
            className="w-1/2 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500 text-center"
          />
        </div>

      {/* DNI Categoria */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="number" placeholder="DNI"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
          <div className="w-2/3 h-full">
            <select
              className="w-full h-full rounded bg-zinc-800 border border-zinc-700 text-zinc-500 focus:ring-2 focus:ring-orange-600 outline-none"
            >
              <option disabled>- Categoria -</option>
              <option>Elite</option>
              <option>Master</option>
            </select>
          </div>
        </div>

      <hr className="border-zinc-600 w-11/12 mx-auto"/>

      {/* Apellidos y Nombres */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="text" placeholder="Apellidos"
            className="w-1/2 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
          <input type="text" placeholder="Nombres"
            className="w-1/2 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
        </div>

      {/* Telefono y correo */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="tel" placeholder="Teléfono"
            className="w-2/5 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
          <input type="email" placeholder="Correo"
            className="w-3/5 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
        </div>

      {/* Ciudad Nacionalidad Equipo */}
        <div className="flex gap-3 justify-between w-full h-8">  
          <input type="text" placeholder="Ciudad"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
          <input type="text" placeholder="Nacionalidad"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
          <input type="text" placeholder="Equipo"
            className="w-1/3 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
        </div>

      {/* Datos del apoderado */}
        <textarea placeholder="Datos del apoderado"
          className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
        />

      {/* Constancia de pago */}
        <div className="flex gap-3 justify-between w-full h-8 items-center">  
          <label className="mx-1 text-zinc-500 w-1/5 text-center" htmlFor="inNumOp">Pago: </label>

          <input type="number" placeholder="Numero Operacion" id="inNumOp"
            className="w-2/5 rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
          <input type="file" placeholder="Equipo"
            className="hidden"
          />

          <div className="w-2/5 rounded bg-zinc-200 border border-none text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500 cursor-pointer flex justify-center items-center hover:font-bold">
            <label htmlFor="inFile" className="text-zinc-500 cursor-pointer ">Constancia 📁</label>
            <input type="file" id="inFile" className="hidden"/>
          </div>
        </div>

      <hr className="border-zinc-600 w-11/12 mx-auto"/>


      {/* Datos adicionales */}
        <div className="flex flex-col gap-3 justify-between w-full">  
          <p className="text-lg text-zinc-500">Deseas dejar los siguientes datos?</p>

          <div className="flex gap-2 w-full justify-evenly">

            <div className="flex gap-2 justify-center items-center h-full ">
              <input type="checkbox" id="inAlergias" className=" h-full checked:accent-orange-600 cursor-pointer"  />
              <label htmlFor="inAlergias" className="text-zinc-500 font-bold cursor-pointer">Alergias</label>
            </div>
            <div className="flex gap-2 justify-center items-center h-full ">
              <input type="checkbox" id="inSangre" className=" h-full checked:accent-orange-600 cursor-pointer" />
              <label htmlFor="inSangre" className="text-zinc-500 font-bold cursor-pointer">Tipo Sangre</label>
            </div>
            <div className="flex gap-2 justify-center items-center h-full ">
              <input type="checkbox" id="inEmergencia" className=" h-full checked:accent-orange-600 cursor-pointer" />
              <label htmlFor="inEmergencia" className="text-zinc-500 font-bold cursor-pointer">Contacto de emergencia</label>
            </div>

          </div>

          <div className="flex gap-2 w-full justify-between">
            <div className="flex gap-3 justify-between w-full h-8">
              <input type="string" placeholder="Alergias"
                className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
              />
              <input type="string" placeholder="Tipo Sangre"
                className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
              />
            </div>
          </div>
          <textarea placeholder="Contacto de emergencia"
            className="w-full rounded bg-zinc-800 border border-zinc-700 text-white p-2 focus:ring-2 focus:ring-orange-600 outline-none h-full placeholder-zing-500"
          />
        </div>


      {/* Enviar */}
        <input type="submit" placeholder="ENVIAR" className="p-2 bg-orange-600 w-1/5 min-w-24 mx-auto rounded cursor-pointer hover:scale-110 transition-all uppercase hover:font-bold"/>
      </form>
    </div>
  );
}