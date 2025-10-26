"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Header =()=>{
    const pathname =usePathname()
    return(
        <header className={"w-full flex items-center justify-between"}>
            <a href={"/a"}>
                <Image
                    alt={"yagami"}
                    src={"/yagami.jpeg"}
                    width={1000}
                    height={1000}
                    className={"w-14 h-14 rounded-full"}
                />
            </a>
            <nav className={"inline-block px-3"}>
                <ul className={"flex gap-4 ]"}>
                    <li >
                        <a className={cn(pathname==="/"&&"text-[#EEEEEE]")} href={"/"}>Overview</a>
                    </li>
                    <li>
                        <a href={"/"} className={cn(pathname==="/projects"&&"text-[#EEEEEE]")} >Projects</a>
                    </li>
                    <li>
                        <a href={"/"} className={cn(pathname==="/playground"&&"text-[#EEEEEE]")}>Playground</a>
                    </li>
                    <li>
                        <a href={"/"} className={cn(pathname==="/blog"&&"text-[#EEEEEE]")}>Blog</a>
                    </li>
                    <li>
                        <a href={"/"} className={cn(pathname==="/stack"&&"text-[#EEEEEE]")}>Stack</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header