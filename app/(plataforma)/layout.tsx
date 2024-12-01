import { ClerkProvider } from "@clerk/nextjs";

const PlataformaLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlataformaLayout;
