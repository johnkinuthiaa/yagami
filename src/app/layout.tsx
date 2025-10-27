import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Suspense} from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yagami",
  description: "A diary of my unspoken thoughts. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full   antialiased`}
      >
          <div className={"flex flex-col font-sans py-8 w-full md:w-[40%] my-auto items-center justify-center mx-auto"}>
              <Header/>
              <Suspense fallback={<div>Loading...</div>}>

                  {children}
              </Suspense>
          </div>
          <Footer/>


      </body>
    </html>
  );
}
