import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b bg-background flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-2">
        <div className="hidden md:flex mr-3">
          <Logo />
        </div>
        {/* <Button
          size="sm"
          variant="outline"
          className="rounded-sm border-[#FC4E0A] hover:bg-[#FC4E0A] hover:text-white hidden md:block h-auto py-1.5 px-3"
        >
          Criar
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="rounded-sm block border-[#FC4E0A] md:hidden hover:bg-[#FC4E0A] hover:text-white"
        >
          <Plus className="h-4 w-4" />
        </Button> */}
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterCreateOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-11 w-11",
            },
          }}
        />
      </div>
    </nav>
  );
};