import BackButton from "@/src/components/layout/back-button";
import {Badge} from "@/components/ui/badge";
import {StackData} from "@/src/constants/stackData";
import {Fragment} from "react";
import StackCard from "@/src/components/stack/stack-card";

const Page =()=>{
    return(
        <div className={"w-full px-2 flex items-start flex-col mt-6"}>
            <BackButton/>
            <div className={"mt-5  leading-relaxed"}>
                Tools,Frameworks,Languages,websites and software i use for my daily development
            </div>
            <div className={"flex flex-wrap gap-4 mt-8"}>
                {StackData.map((stack,index)=>(
                    <Fragment key={index}>
                        <StackCard
                            name={stack.name}
                            image={stack.image}
                            description={stack.description}
                            url={stack.url}/>
                    </Fragment>

                ))}
            </div>
        </div>
    )
}
export default Page