import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";
import Loading from "@/src/loading";
import Target from "../components/layout/target";
import MyProfile from "../components/layout/my-profile";
import { sfPro, sfMono, sfRounded, newYork } from "./fonts";

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
        className={`${sfPro.variable} ${sfMono.variable} ${sfRounded.variable} ${newYork.variable} font-sans w-full flex flex-col justify-between h-full! antialiased`}
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
