"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
type HeaderLinkType = {
  title: string;
  url: string;
};

const HeaderLinks: HeaderLinkType[] = [
  {
    title: "Overview",
    url: "/",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Playground",
    url: "/playground",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={
        "border-x border-dashed border-[#3A3A3A] md:w-[80%] lg:w-[40%]  mx-auto py-2 px-2 flex items-center justify-between"
      }
    >
      <a className="flex items-center gap-2" href={"/"}>
        <Avatar>
          <AvatarImage src={"/yagami.jpeg"} />
          <AvatarFallback>LY</AvatarFallback>
        </Avatar>
        <div className="text-white font-bold text-3xl font-serif">John</div>
      </a>
      <nav className={"inline-block px-3"}>
        <ul className={"flex gap-4 ]"}>
          {HeaderLinks.map((link, index) => (
            <li key={index} className="flex flex-col items-center">
              <a
                className={cn(pathname === link.url && "text-[#EEEEEE]")}
                href={link.url}
              >
                {link.title}
              </a>
              {pathname == link.url && (
                <div
                  className={
                    "rounded-full py-0.5 px-0.5 bg-white/90 w-fit h-fit! flex items-top"
                  }
                ></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
