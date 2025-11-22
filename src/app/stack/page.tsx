import BackButton from "@/src/components/layout/back-button";
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
            <div className={"grid grid-cols-2 md:grid-cols-4  gap-2 mt-8"}>
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