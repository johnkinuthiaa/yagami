
import {Suspense} from "react";
import Loading from "@/src/app/blog/[slug]/loading";

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
