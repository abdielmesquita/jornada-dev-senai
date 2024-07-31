import Image from "next/image";
import IconMenuMobile from "./IconMenuMobile";

export default function NavBar() {
  return (
    <nav className="bg-white text-black w-full mx-auto flex">
      <div className="w-full flex flex-row items-center justify-between h-10 ml-[1.375rem] mt-6 mr-[2.1875rem] mb-3">
        <Image
          src="/senai.svg"
          alt="Senai Logo"
          width={153}
          height={20}
          className="w-[9.625rem]"
          priority
          />
          
        <IconMenuMobile />
      </div>
    </nav>
  )
}