'use client';

export default function RegisterForm() {
  return ( 
    <div className="w-full bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 font-oswald">
      <h1 className="text-3xl  text-white text-center mb-6">
        REGIS<span className="text-orange-600">TRATE</span>
      </h1>

      <form action="" className="text-white flex flex-col gap-4 max-w-md mx-auto">

        <div className="w-full flex gap-3 justify-between">
          <label htmlFor="UCI" className="inline-flex items-center gap-1 cursor-pointer">
            <input type="checkbox" className="size-5 rounded border-gray-300 shadow-sm" id="UCI" />
            <span className="font-medium"> UCI</span>
          </label>
          <input type="text" placeholder="Año Nacimiento" className="bg-white rounded text-gray-800 text-center" />

          <div>
            <input type="radio" name="sexo" value="Hombre" id="optHombre" />
            <label className="mx-1" htmlFor="optHombre">Hombre</label>
            <input type="radio" name="sexo" value="Mujer" id="optMujer"/>
            <label className="mx-1" htmlFor="optMujer">Mujer</label>
          </div>
        </div>

        <div className="w-full flex gap-3 justify-between">
          <input type="text" placeholder="DNI" className="bg-white rounded text-gray-800 w-full text-center" />
          <select name="" id="">
            <option value="">Categoría</option>
          </select>
        </div>

        <div className="w-full flex gap-3 justify-between">
          <input type="text" placeholder="Apellidos" className="bg-white rounded text-gray-800 w-full text-center" />
          <input type="text" placeholder="Nombres" className="bg-white rounded text-gray-800 w-full text-center" />
        </div>

        <div className="w-full flex gap-3 justify-between">
          <input type="text" placeholder="Telefono" className="bg-white rounded text-gray-800 w-full text-center" />
          <input type="text" placeholder="Correo" className="bg-white rounded text-gray-800 w-full text-center" />
        </div>

        <div className="w-full flex gap-3 justify-between">
          <input type="text" placeholder="Ciudad" className="bg-white rounded text-gray-800 w-full text-center" />
          <input type="text" placeholder="Nacionalidad" className="bg-white rounded text-gray-800 w-full text-center" />
          <input type="text" placeholder="Equipo" className="bg-white rounded text-gray-800 w-full text-center" />
        </div>
        
        <div className="w-full flex gap-3 justify-between">
          <label htmlFor="">Constancia Pago</label>
          <input type="text" placeholder="Numero Operacion" className="bg-white rounded text-gray-800 w-full text-center" />
          <input type="file" placeholder="Constancia Pago" className="bg-white rounded text-gray-800 w-full text-center" />
        </div>
        
        <div className="w-full flex flex-col gap-3 justify-between">
          <div className="flex gap-2 w-full">
            <input type="checkbox" />
            <input type="text" placeholder="Apoderado" className="bg-white rounded text-gray-800 w-full text-center" />
          </div>
          <div className="flex gap-2 w-full">
            <input type="checkbox" />
            <input type="text" placeholder="Contacto de emergencia" className="bg-white rounded text-gray-800 w-full text-center" />
          </div>
          <div className="flex gap-2 w-full">
            <input type="checkbox" />
            <input type="text" placeholder="Tipo Sangre" className="bg-white rounded text-gray-800 w-full text-center" />
          </div>
          <div className="flex gap-2 w-full">
            <input type="checkbox" />
            <input type="text" placeholder="Alergias" className="bg-white rounded text-gray-800 w-full text-center" />
          </div>
         
        </div>

      </form>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            placeholder="Ej. Juan Pérez"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Categoría
          </label>
          <select
            className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:ring-2 focus:ring-orange-600 outline-none"
          >
            <option>Junior</option>
            <option>Elite</option>
            <option>Master</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-white mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:ring-2 focus:ring-orange-600 outline-none"
            placeholder="+51 987654321"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors duration-200"
        >
          Inscribirme
        </button>
      </form>
    </div>
  );
}
