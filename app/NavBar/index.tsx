import Image from "next/image";
import MenuDesktop from "./MenuDesktop";
import IconMenuMobile from "./IconMenuMobile";

export default function NavBar() {
  return (
    <nav className="w-full mx-auto flex">
      <div className="w-full flex flex-row items-center justify-between h-10 ml-[1.375rem] mt-6 mr-[2.1875rem] mb-3
                      lg:mx-auto lg:max-w-5xl lg:pt-11 lg:pb-14 lg:m-0">
        <Image
          src="/senai.svg"
          alt="Senai Logo"
          width={153}
          height={20}
          className="w-[9.625rem] lg:w-[13.446rem] h-auto"
          priority
          />
        
        <MenuDesktop />
        <IconMenuMobile />
      </div>
    </nav>
  )
}