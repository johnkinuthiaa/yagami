"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/src/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/ui/avatar";

const Header =()=>{
    const pathname =usePathname()
    return(
        <header className={"w-full flex items-center justify-between"}>
            <a href={"/"}>
                <Avatar>
                    <AvatarImage src={"/yagami.jpeg"} />
                    <AvatarFallback>LY</AvatarFallback>
                </Avatar>
            </a>
            <nav className={"inline-block px-3"}>
                <ul className={"flex gap-4 ]"}>
                    <li >
                        <a className={cn(pathname==="/"&&"text-[#EEEEEE]")} href={"/"}>Overview</a>
                    </li>
                    <li>
                        <a href={"/projects"} className={cn(pathname.includes("/projects")&&"text-[#EEEEEE]")} >Projects</a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href={"/playground"} className={cn(pathname.includes("/playground")&&"text-[#EEEEEE]")}>Playground</a>*/}
                    {/*</li>*/}
                    <li>
                        <a href={"/blog"} className={cn(pathname.includes("/blog")&&"text-[#EEEEEE]")}>Blog</a>
                    </li>

                    {/*<li>*/}
                    {/*    <a href={"/stack"} className={cn(pathname.includes("/stack")&&"text-[#EEEEEE]")}>Stack</a>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </header>
    )
}
export default Header