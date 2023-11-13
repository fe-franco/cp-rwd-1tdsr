import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Porto ResQ | Prestadores de Serviço",
  description: "uma plataforma para gerenciar motoristas de guincho",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="pt-br">
      <body className={cn(inter.className, "max-h-screen overflow-hidden")}>
        {children}
        {modal}
      </body>
    </html>
  );
}
