import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  p-4 flex border-t  items-center bg-slate-100">
      <div className="flex items-center justify-between w-full md:w-3/4 mx-auto">
        <Logo />
        <div className="space-x-5 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Politica de Privacidade
          </Button>
          <Button size="sm" variant="ghost">
            Termos de Serviço
          </Button>
        </div>
      </div>
    </div>
  );
};
