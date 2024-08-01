import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function Section02() {
  return(
    <div className="w-full px-5 pt-7 pb-5">
      <div className="w-full bg-gradient-pattern bg-cover h-[0.188rem]"></div>
      <div className={montserrat.className}>
        <p className="text-2xl font-semibold text-center leading-6 mt-5 mb-1">
          <span className="font-extrabold text-transparent bg-gradient-pattern bg-clip-text">
            Quem pode fazer
          </span>
          <br/>o curso?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 gap-4 text-white text-lg px-2 font-semibold">
        <div className="bg-[#DB3476] rounded-md flex flex-col items-center justify-center gap-2 text-center py-4">
          <Image
            src="/ic-generic-check-rounded.svg"
            alt="círculo checado"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
            />
          <p>Residentes do<br/> estado do Paraná</p>
        </div>
        <div className="bg-[#ED7731] rounded-md flex flex-col items-center justify-center gap-2 text-center py-4">
          <Image
            src="/ic-generic-check-rounded.svg"
            alt="círculo checado"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
            />
          <p>Pessoas com idade<br/> mínima de 14 anos</p>
        </div>
        <div className="bg-[#9212AD] rounded-md flex flex-col items-center justify-center gap-2 text-center py-4">
          <Image
            src="/ic-generic-check-rounded.svg"
            alt="círculo checado"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
            />
          <p>Não precisa ter conhecimento<br/> prévio em tecnologia</p>
        </div>
      </div>
    </div>
  )
}