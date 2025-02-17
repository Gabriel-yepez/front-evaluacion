
export default function Cargando() {
  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="flex flex-col items-center">
        <div className="loader-circle relative w-24 h-24 mb-4">
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
          <div className="dot absolute bg-indigo-500 w-6 h-6 rounded-full"></div>
        </div>
        <div className="text-2xl font-bold text-gray-700 mt-1">Cargando</div>
      </div>
    </div>
  )
}

