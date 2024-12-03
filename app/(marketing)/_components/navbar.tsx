import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 md:px-32 flex border-b shadow-sm bg-white items-center">
      <div className="flex items-center justify-between w-full  mx-auto">
        <Logo />
        <div className="space-x-5 md:block md:w-auto flex items-center justify-between w-full">
          <Button
            size="sm"
            variant="ghost"
            className="hover:text-red-orange"
            asChild
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            className="bg-red-orange hover:bg-orange-600 font-semibold"
            size="sm"
            asChild
          >
            <Link href="/sign-up">Inscreva-se</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
