"use client"
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/src/lib/utils";
import {useRouter} from "next/navigation";

const BackButton =({...className})=>{
    const router =useRouter()
    return(
        <Button
            onClick={()=>router.back()}
            size={"sm"}
            className={cn(className,"cursor-pointer w-fit py-1 px-3 border-[#3A3A3A] hover:bg-[#222] hover:text-white ")}
            variant={"outline"}>
            <ArrowLeft/> Go Back
        </Button>
    )
}
export default BackButton