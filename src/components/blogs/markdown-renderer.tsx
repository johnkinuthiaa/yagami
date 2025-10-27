import Markdown from "react-markdown"
import remarkGfm from "remark-gfm";
import rehypeStringify from 'rehype-stringify'
import {cn} from "@/src/lib/utils";
const MarkdownRenderer =({children}:Readonly<{children:string}>)=>{
    return(
        <div className={cn("font-sans prose [&>*]:!leading-relaxed [&>*]:py-3   dark:prose-invert")}>
            <Markdown remarkPlugins={[remarkGfm,rehypeStringify]}>
                {children}
            </Markdown>

        </div>

    )
}
export default MarkdownRenderer