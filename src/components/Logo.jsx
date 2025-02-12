import { roboto } from "../ui/font";
import Image from 'next/image'


export default function Logo() {
  return (
    <div className={`${roboto.className} flex flex-row items-center leading-none text-white`}>
      <Image
      className="rounded-full"
      src='/fotoPerfil3.png'
      height={70}
      width={70}
      alt="foto de dahsboard"
      />
     
      <p className="text-[20px] ml-3">ActionMetrics</p>
    </div>
  )
}
