import type {Metadata} from "next";
import {Suspense} from "react";
import Loading from "@/src/app/loading";

export const metadata: Metadata = {
    title: "Yagami projects",
    description: "A diary of my unspoken thoughts. ",
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
