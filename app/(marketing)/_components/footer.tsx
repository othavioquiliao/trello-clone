import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full md:px-32 p-4 flex border-t  items-center bg-slate-100">
      <div className="flex items-center justify-center md:justify-between w-full mx-auto">
        <Image src="/icon.png" alt="Icone" width={40} height={40} />
        <div className="space-x-5 md:block md:w-auto  hidden items-center justify-center md:justify-between w-full">
          <Button size="sm" variant="ghost" className="hover:text-red-orange ">
            Politica de Privacidade
          </Button>
          <Button size="sm" variant="ghost" className="hover:text-red-orange ">
            Termos de Serviço
          </Button>
        </div>
      </div>
    </div>
  );
};
