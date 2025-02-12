import { useRouter } from 'next/router'
import Image from 'next/image'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  const router= useRouter()//enrutamiento

  async function handlesubmit(event){

        event.preventDefault()
        //toma los datos del formulario cuando hace click al boton o enter
        const form= new FormData(event.target)
        const usuario= form.get('usuario')
        const password= form.get('password')  

        const response = await fetch('/api/auth/login', { //lama para atenticar el usuario
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ usuario, password }),
        })

        if(response.ok){ //si el usuario es correcto pasa al dashboard

          toast.success('Inicio de sesion exitoso')     
          router.push('/dashboard')   
        } //si no decimos que los datos estan incorrectos
        else toast.error('Datos invalidos')
    }

  return (
    <div>
      <div className=" flex h-screen">

        <div className="flex flex-col bg-gradient-to-b from-indigo-500 to-indigo-300 w-1/2 justify-center items-center p-8">

            <Image
              className='mb-28 rounded-full'
              src="/fotoPerfil3.png"
              width={320}
              height={400}
              alt="Foto de perfil"
            />

            <div className="text-5xl font-boldm mb-4 text-white">Bienvenidos a ActionMetrics</div>
        
        </div>

        <div className="flex flex-col bg-white w-1/2 justify-center items-center">
            <h1 className="text-2xl font-bold mb-6">Inicio de Sesion</h1>

            <form onSubmit={handlesubmit}>
                <div className="mb-4">

                  <label htmlFor="usuario" className="text-gray-700 font-bold mb-2">Usuario</label>
                  <input
                    name="usuario" 
                    type="text" 
                    id="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    placeholder="introducir usuario"
                  />
                </div>

                <div className="mb-4">

                  <label htmlFor="password" className="text-gray-700 font-bold mb-2">Contraseña</label>
                  <input 
                    name="password"
                    type="password" 
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required 
                    placeholder="introduce contraseña"       
                  />          
                </div>

                <div className="flex items-center justify-between">
                  <button
                  type="submit" 
                  className="bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">

                    Iniciar
                  </button>
                </div>

            </form>

        </div>
        
      </div>
     
    </div>
  )
}