import Logo from "../Logo"
import Link from "next/link"
import { RxDashboard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";import { LuFileSearch2 } from "react-icons/lu";

export default function Layout({children}) {
  return (

    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

      <aside className="w-full flex-none md:w-64 bg-indigo-300">

        <div className="flex h-full flex-col px-3 py-4 md:px-2">

          <h1 className="mb-2 flex h-20 items-end justify-start md:h-40">
            <div className="w-32 text-white md:h-40">
              <Logo/>
            </div>
          </h1>

          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">

            <Link href="/dashboard" 
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-indigo-300 p-3 text-lg text-white font-bold hover:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" >
            <RxDashboard size={30} />
            Inicio
            </Link>
            
            <Link href="/evaluacion" 
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-indigo-300 p-3 text-lg text-white font-bold hover:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" >
            <CgNotes size={30}/>
            Generar evaluación
            </Link>
            
            <Link href="/historial" 
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-indigo-300 p-3 text-lg text-white font-bold hover:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" >
            <LuFileSearch2 size={30}/>
            Historial
            </Link>

            <Link href="/personal" 
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-indigo-300 p-3 text-lg text-white font-bold hover:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" >
            <IoPerson size={30}/>
            Personal
            </Link>

            <div className="hidden h-auto w-full grow md:block"></div>

            <Link href="/" 
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-indigo-300 p-3 text-lg text-white font-bold hover:bg-indigo-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" >
            <BiLogOut size={30}/>
            Salir
            </Link>

          </div>
          

        </div>
      </aside>
            
       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
       </div>

    </div>
  )
}
