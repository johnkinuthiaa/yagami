import {Stack} from "@/src/constants/types";
const StackCard =( {name,url,image,description}:Stack)=>{
    return(
        <a href={url} className={"flex flex-col rounded py-4 gap-4 flex-1 min-w-44 hover:!bg-[#191919] px-2"}>
            <div className={"flex gap-3 items-center"}>
                <picture>
                    <img src={image} alt={name} height={1000} width={1000} className={"w-10 h-10 object-cover object-center rounded"}/>
                </picture>
                <div className={"font-bold text-[#7B7B7B]"}>{name}</div>
            </div>
            <p className={"text-[#EEE] leading-relaxed"}>{description}</p>
        </a>
    )
}
export default StackCard