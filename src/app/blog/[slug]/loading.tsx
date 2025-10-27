import {Skeleton} from "@/src/components/ui/skeleton";

const Loading =()=>{
    return(
        <div className={"flex flex-col gap-5"}>
            <div>
                <Skeleton className={"w-[150px]"}/>
                <Skeleton className={"w-[100px]"}/>
                <Skeleton className={"w-[80px]"}/>
            </div>
            <div className={"mt-6"}>
                <Skeleton className={"w-full h-full"}/>
            </div>

        </div>
    )
}
export default Loading