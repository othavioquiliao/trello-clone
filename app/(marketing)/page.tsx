import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import Link from "next/link";
import { headingFont } from "../layout";
import { Poppins } from "next/font/google";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center">
        <div
          className={cn(
            "mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase",
            headingFont.className
          )}
        >
          <Medal className="h-6 w-6 mr-2" />
          Numero 1 Gerenciador de tarefas
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 ">
          Tarafes ajudam equipes
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4  py-2 rounded-md w-fit">
          avançar juntos.
        </div>
      </div>
      <div
        className={cn(
          "mt-4 max-w-xs md:max-w-2xl mx-auto text-center text-sm md:text-xl text-neutral-400",
          textFont.className
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum hic ab
        quisquam est labore, fugit quibusdam esse?
      </div>
      <Button className="mt-4" size="lg" asChild>
        <Link href="/sign-up">Começar agora</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
