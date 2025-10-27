"use client"
import {useParams} from "next/navigation";
import {allPosts} from "content-collections";

import MarkdownRenderer from "@/src/components/blogs/markdown-renderer";
import {Metadata} from "next";
const Page =()=>{
    const {slug} =useParams()
    const post =allPosts.find((post)=>post._meta.path ===slug)


    if(!post){
        return(
            <div>Post not found</div>
        )
    }
    return(
        <div className={" font-sans flex flex-col gap-2"}>
            <div className={"flex font-mono flex-col gap-2 my-16"}>
                <div className={"font-bold text-xl  tracking-tighter sm:text-xl "}>{post.title}</div>
                <div>{post.date.toDateString()}</div>
                <div>{post.author}</div>
            </div>
            <MarkdownRenderer>
                {post.content}
            </MarkdownRenderer>


        </div>
    )
}
export default Page