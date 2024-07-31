import Image from "next/image";

export default function Hero() {
  return(
    <div className="bg-[#e8e8e8] h-[25rem] flex flex-col justify-between">
      <div className="h-[1.375rem] w-full bg-gradient-to-r from-[#ef7430] to-[#cc5f72]"></div>
      <div className="mx-auto pt-7 px-7">
        <p className="font-black text-5xl text-[#f91d7f]">
          Jornada <br />
          Dev Senai
        </p>
        <p className="font-light text-lg">
          Ingresse na indústria da tecnologia com essa formação gratuita
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          src="/badge_banner_mobile.png"
          alt="+ de 4500 vagas de empregos"
          width={550}
          height={400}
          className="w-[14rem] right"
          priority
          />
      </div>
    </div>
  )
}