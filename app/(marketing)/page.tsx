import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";
import plataform from "@/public/plataform.png";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col  md:flex-row w-full justify-center h-full items-center">
      <div className="flex gap-6 flex-col px-4 mb-5 md:mb-0 md:pl-32 justify-center items-start h-1/2 md:h-full w-full md:w-1/2 ">
        <h1
          className={`text-3xl md:leading-snug md:text-start md:text-6xl font-semibold text-neutral-800 ${textFont.className}`}
        >
          <span className="underline decoration-red-orange decoration-[solid decoration-[13px]  underline-offset-[5px]">
            Uma
          </span>{" "}
          plataforma para otimizar qualquer fluxo <br /> de trabalho
        </h1>
        <p className="text-zinc-700 md:text-start text-xl ">
          Organize e gerencie seus projetos de forma intuitiva e colaborativa,{" "}
          <br />
          aumentando a produtividade da sua equipe.
        </p>
        <Button
          size="lg"
          className="bg-red-orange hover:bg-orange-600 text-lg font-semibold "
        >
          <Link href="/sign-up">Teste gratuitamente</Link>
        </Button>
      </div>

      <div className="flex hidden md:flex justify-center items-center h-1/2 md:h-full w-full md:w-1/2">
        <Image
          className="max-w-[70%] max-h-[70%]"
          src={plataform}
          alt="Imagem ilustrativa da plataforma"
        />
      </div>
    </div>
  );
};

export default MarketingPage;
