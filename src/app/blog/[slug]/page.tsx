"use client"
import {useParams} from "next/navigation";
import {allPosts} from "content-collections";

import MarkdownRenderer from "@/src/components/blogs/markdown-renderer";
import readingTime from "reading-time";
import {ReadingTimeStats} from "@/src/constants/types";
import BackButton from "@/src/components/layout/back-button";
const Page =()=>{
    const {slug} =useParams()
    const post =allPosts.find((post)=>post._meta.path ===slug)


    if(!post){
        return(
            <div>Post not found</div>
        )
    }
    const stats:ReadingTimeStats =readingTime(post.content)

    return(
        <div
            style={{
                scrollBehavior:"smooth",
                scrollbarWidth:"none"
            }}
            className={" font-sans flex flex-col gap-2 px-4"}>
            <div className={"mt-6"}>
                <BackButton/>
            </div>
            <div className={"flex font-mono flex-col gap-4 my-8"}>
                <div className={"font-bold text-xl  tracking-tighter sm:text-xl "}>{post.title}</div>
                <div className={"flex gap-5"}>
                    <div>{post.date.toDateString()}</div>
                    <div>- A {stats?.text}</div>
                </div>
                <div>{post.author}</div>
            </div>
            <MarkdownRenderer>
                {post.content}
            </MarkdownRenderer>


        </div>
    )
}
export default Page