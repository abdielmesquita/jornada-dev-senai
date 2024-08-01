import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Section01() {
  return(
    <div className="w-full">
      <div className="mt-6 mx-6">
        <div className="mx-auto">
          <div className={montserrat.className}>
            <p className="text-3xl font-semibold">
              <span className="font-extrabold text-transparent bg-gradient-pattern-invert bg-clip-text">
                Construa seu futuro
              </span>
              <br/>na área de tecnologia
            </p>
          </div>
          <p className="text-sm my-6">
            O <span className="font-bold">Sistema Fiep</span>, por meio do <span className="font-bold">Senai</span>, oferece <span className="font-bold">uma jornada de estudos em programação front-end totalmente gratuita</span> com a <span className="font-bold">relevância do Senai</span> e certificado de qualidade profissional.
          </p>
          <p className="text-sm my-6">
            Chegou a sua hora de ingressar em um mercado cheio de oportunidades!
          </p>
        </div>
      </div>
      <div className="h-[0.375rem] w-[11.25rem] flex flex-row bg-gradient-pattern bg-cover">
      </div>      
      <div className="mt-6 mx-8">
        <ul className="text-xl">
          <li className="flex flex-row items-center mb-3">
            <div className="h-10 w-10 mr-2">
              <Image
                src="/ic-time-clock.svg"
                alt="ícone relógio"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
                />
            </div>
            <div>
              <p>
                <span className="font-bold">300 horas</span> de curso
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center mb-3">
            <div className="h-10 w-10 mr-2">
              <Image
                src="/ic-security-verified.svg"
                alt="ícone verificado"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
                />
            </div>
            <div>
              <p>
                <span className="font-bold">Certificado de<br/> aperfeiçoamento<br/></span> a cada <span className="font-bold">50 horas</span> concluídas
              </p>
            </div>
          </li>
          <li className="flex flex-row items-center mb-3">
            <div className="h-10 w-10 mr-2">
              <Image
                src="/ic-devices-macbook-and-iphone.svg"
                alt="ícone dispositivos"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
                />
            </div>
            <div>
              <p>
                Aula <span className="font-bold">100% online</span>
              </p>
            </div>
          </li>
        </ul>
        <button className="bg-[#5110B7] rounded-full flex flex-row items-center justify-center px-8 py-3 w-full mx-auto gap-2 mb-8">
          <p className=" text-white text-lg font-semibold">Quero participar</p>
          <Image
            src="/ic-arrow-arrows-right.svg"
            alt="seta para direita"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
            />
        </button>
      </div>
    </div>
  )
}