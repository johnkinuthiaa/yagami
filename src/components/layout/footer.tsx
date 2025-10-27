"use client"
import {useEffect, useState} from "react";

const Footer =()=>{
    const[date,setDate] =useState(new Date().toString())
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date().toString())
        },1000)
    },[])

    return(
        <footer className={"font-mono text-[#7B7B7B] text-sm flex flex-col gap-2 md:fixed lg:fixed absolute bottom-0 md:bottom-6 px-4"}>
            <div>
                <p suppressHydrationWarning={true}>  {date.substring(0,29)}| |-YAGAMI SITE</p>
            </div>
            <div >
                <p>LIGHT YAGAMI - <span className={"font-sans"}>All rights Reserved</span>  </p>
            </div>
            <p className={"text-center flex gap-2 items-center "}><span className={"animate-pulse rounded-full  bg-[#3DD68C] py-1 px-1"}></span> All systems normal</p>
        </footer>
    )
}
export default Footer