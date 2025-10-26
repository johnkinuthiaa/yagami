import {GithubIcon, Mail} from "lucide-react";

const Socials =()=>{
    return(
        <div className={"flex gap-5 my-6 py-5 w-full border-t px-3 border-t-[#3A3A3A]"}>
            <a target={"_blank"} href={"https://github.com/johnkinuthiaa"} className={"flex hover:text-[#EEEEEE] items-center gap-2 "}>
                <GithubIcon /> Github
            </a>
            <a target={"_blank"} href={"mail.to:kinuthiajohn122@gmail.com"} className={"flex hover:text-[#EEEEEE] items-center gap-2 "}>
                <Mail/> Mail me
            </a>


        </div>
    )
}
export default Socials