import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jornada Dev Senai",
  description: "Projeto para processo seletivo de vaga temporária de Desenvolvedor Fullstack Pleno pelo Senai de Curitiba-PR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
