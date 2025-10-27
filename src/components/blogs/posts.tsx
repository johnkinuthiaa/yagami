import {allPosts} from "content-collections";
export default function Posts() {
    return (
        <ul className={"flex flex-col gap-3 mt-12"}>
            <div>All blogs. <strong>Click on</strong> any to Read</div>
            {allPosts.map((post) => (
                <li className={"w-full p-2 hover:bg-[#111111] rounded"} key={post._meta.path}>
                    <a href={`/blog/${post._meta.path}`}>
                        <div className={"font-bold my-3 !text-[#EEE]"}>{post.title}</div>
                        <p>{post.summary}...<strong>Read more </strong> </p>
                    </a>
                </li>
            ))}
        </ul>
    );
}