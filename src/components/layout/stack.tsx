import { StackData } from "@/src/constants/stackData";
import { Fragment, useState } from "react";
import StackCard from "@/src/components/stack/stack-card";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

const Stack = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tools =
    activeTab == "All"
      ? StackData
      : StackData.filter((data) => data.type == activeTab);

  return (
    <>
      <div className="w-full border-b border-dashed border-[#484848]">
        <div className="border-b border-dashed border-[#484848]">
          <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto px-2 flex items-center justify-between">
            <div className="flex-1  py-1 px-2 text-2xl font-serif">
              Stack and tools
            </div>
            <ButtonGroup className="flex-1 *:cursor-pointer bg-black">
              <Button variant={"outline"} onClick={() => setActiveTab("All")}>
                All
              </Button>
              <Button
                variant={"outline"}
                onClick={() => setActiveTab("Backend")}
              >
                Backend
              </Button>
              <Button
                variant={"outline"}
                onClick={() => setActiveTab("Frontend")}
              >
                Frontend
              </Button>
              <Button variant={"outline"} onClick={() => setActiveTab("Tool")}>
                Tools
              </Button>
            </ButtonGroup>
            <br />
          </div>
        </div>
        <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto py-2 px-2 flex items-center justify-between">
          <div className={"flex flex-wrap gap-3 items-center mt-8 w-full"}>
            {tools.map((stack, index) => (
              <div className="w-fit" key={index}>
                <StackCard
                  name={stack.name}
                  image={stack.image}
                  description={stack.description}
                  url={stack.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Stack;
