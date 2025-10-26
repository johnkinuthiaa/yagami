"use client"
import {useState} from "react";

const Footer =()=>{
    const[date,setDate] =useState("")
    setInterval(()=>{
        setDate(new Date().toString())
    },1000)
    return(
        <footer className={"font-mono text-[#7B7B7B] text-sm flex flex-col gap-2 absolute bottom-5 px-4"}>
            <div>
                <p>  {date.substring(0,29)} -YAGAMI SITE</p>
            </div>
            <div >
                <p>LIGHT YAGAMI</p>
            </div>
            <p className={"text-center flex gap-2 items-center w-fit "}><span className={"animate-pulse rounded-full  bg-[#3DD68C] py-1 px-1"}></span> All systems normal</p>
        </footer>
    )
}
export default Footer