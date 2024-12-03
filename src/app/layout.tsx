import type { Metadata, Viewport } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kronhos ERP",
  description: "ytr",
  keywords: "empresa, marketing",
  icons: {
    icon: "/Images/IconoSinFondo.png",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}