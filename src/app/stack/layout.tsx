import type {Metadata} from "next";
import {Suspense} from "react";
import Loading from "@/app/loading";

export const metadata: Metadata = {
    title: "Yagami Stack and tools",
    description: "Tools i use for modern day development. ",
};

export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </div>
    );
}
