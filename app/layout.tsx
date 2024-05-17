import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from "@/context/Web3Modal";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "agrowVault",
  description: "Agro-based Supplychain Management dApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        <Web3ModalProvider>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
