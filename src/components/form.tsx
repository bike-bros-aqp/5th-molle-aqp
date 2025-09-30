export default function RegisterForm() {
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-lg bg-zinc-900 rounded-2xl shadow-xl p-8 border border-zinc-800">
        <h1 className="text-3xl font-extrabold text-white text-center mb-6">
          Registro <span className="text-orange-600">MILLEBAYA</span>
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 text-white px-4 py-2 focus:ring-2 focus:ring-orange-600 outline-none"
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
    </div>
  );
}
