import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";
import Loading from "@/src/loading";
import Target from "../components/layout/target";
import MyProfile from "../components/layout/my-profile";

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
        className={`${geistSans.variable} ${geistMono.variable} w-full flex flex-col justify-between h-full! antialiased`}
      >
        <div
          className={
            "flex flex-col font-sans w-full items-center justify-center mx-auto"
          }
        >
          <div className="w-full border border-dashed border-[#3A3A3A] ">
            <Header />
          </div>
          {/* <Target/> */}

          <Suspense fallback={<Loading />}>
            <div className="w-full">{children}</div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
