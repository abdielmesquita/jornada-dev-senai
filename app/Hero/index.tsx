import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Hero() {
  return(
    <div className="bg-[#e8e8e8] h-[25rem] flex flex-col justify-between lg:justify-normal">
      <div className="h-[1.375rem] w-full bg-gradient-to-r from-[#ef7430] to-[#cc5f72]
                      lg:h-2 lg:bg-gradient-pattern-invert lg:bg-cover"></div>
      <div className={`w-full lg:max-w-5xl flex flex-col lg:flex-row lg:h-full lg:mx-auto ${montserrat.className}`}>
        <div className="mx-auto pt-7 px-7 lg:m-0 lg:p-0 lg:flex lg:flex-col lg:items-start lg:justify-center ">
          <p className="font-black text-5xl text-[#f91d7f] tracking-tight leading-10 pb-3">
            Jornada <br />
            Dev Senai
          </p>
          <p className="font-light text-lg tracking-tight leading-none pb-3">
            Ingresse na indústria da tecnologia com essa formação gratuita
          </p>
        </div>
        <div className="flex justify-end lg:items-start">
          <Image
            src="/badge-banner-mobile.png"
            alt="+ de 4500 vagas de empregos"
            width={240}
            height={201}
            className="w-60 h-auto right lg:hidden"
            priority
            />
          <Image
            src="/badge-banner-desktop.png"
            alt="+ de 4500 vagas de empregos"
            width={509}
            height={291}
            className="w-[31.813rem] h-auto hidden lg:flex"
            priority
            />
        </div>
      </div>
    </div>
  )
}