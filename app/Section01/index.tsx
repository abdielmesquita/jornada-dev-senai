import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Section01() {
  return(
    <div className="w-full relative">      
      <div className="h-[0.375rem] w-[11.25rem] lg:w-80 absolute left-0 top-72 sm:top-56 md:top-60 lg:top-[16.5rem] bg-gradient-pattern bg-cover">
      </div>  
      <div className="w-full lg:max-w-5xl lg:mx-auto lg:flex lg:flex-row lg:gap-16">
        <div className="w-full">
          <div className="pt-6 px-6 mx-auto mb-7">
            <p className={`text-3xl font-semibold ${montserrat.className}`}>
              <span className="font-extrabold text-transparent bg-gradient-pattern-invert bg-clip-text">
                Construa seu futuro
              </span>
              <br/>na área de tecnologia
            </p>
            <p className="text-sm my-6">
              O <span className="font-bold">Sistema Fiep</span>, por meio do <span className="font-bold">Senai</span>, oferece <span className="font-bold">uma jornada de estudos em programação front-end totalmente gratuita</span> com a <span className="font-bold">relevância do Senai</span> e certificado de qualidade profissional.
            </p>
            <p className="text-sm my-6">
              Chegou a sua hora de ingressar em um mercado cheio de oportunidades!
            </p>
          </div>    
          <div className="pt-6 px-8 mt-8">
            <ul className="text-xl mb-8">
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
            <button className="bg-[#5110B7] border-[#5110B7] border-2 rounded-full flex flex-row items-center justify-center px-8 py-3 w-full mx-auto gap-2 mb-8
                              lg:w-56 lg:bg-white lg:px-4 text-white lg:text-[#5110B7]">
              <p className="text-lg font-semibold">Quero participar</p>
              <Image
                src="/ic-arrow-arrows-right-white.svg"
                alt="seta para direita"
                width={32}
                height={32}
                className="h-8 w-8 lg:hidden"
                priority
                />
                <Image
                src="/ic-arrow-arrows-right-purple.svg"
                alt="seta para direita"
                width={32}
                height={32}
                className="h-8 w-8 hidden lg:flex"
                priority
                />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-full">
          <Image
            src="/section01-persona.png"
            alt="persona"
            width={520}
            height={581}
            className="w-[32.5rem] h-[36.25rem]"
            priority
            />
        </div>
      </div>
    </div>
  )
}