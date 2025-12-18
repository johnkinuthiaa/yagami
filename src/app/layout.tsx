"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Suspense, useState} from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";
import {Loading} from "@/src/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Yagami",
//   description: "A diary of my unspoken thoughts. ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    let [showChildren,setShowChildren] =useState(false)
    setTimeout(()=>{
        setShowChildren(true)
    },2500)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full flex flex-col justify-between !h-full antialiased`}
      >
          {showChildren?
              <div className={"flex flex-col font-sans py-2 w-full md:w-[40%] my-6 items-center justify-center mx-auto"}>
                  <Header/>
                  <Suspense fallback={<Loading/>}>
                      {children}
                  </Suspense>
                  <Footer/>
              </div>
              :
              <Loading/>
          }

      </body>
    </html>
  );
}
