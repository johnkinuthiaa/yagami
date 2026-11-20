import { GithubIcon, Mail } from "lucide-react";
import Obfuscate from "react-obfuscate";

const Socials = () => {
  return (
    <div
      className={
        "flex gap-5 my-6 py-5 w-full border-t border-dashed px-3 border-t-[#3A3A3A]"
      }
    >
      <a
        target={"_blank"}
        href={"https://github.com/johnkinuthiaa"}
        className={"flex hover:text-[#EEE] items-center gap-2 "}
      >
        <GithubIcon /> Github
      </a>

      <div className={"flex hover:text-[#EEE] items-center gap-2 "}>
        <Mail />
        <Obfuscate email="johnmuniu477@gmail.com" />
      </div>
    </div>
  );
};
export default Socials;
