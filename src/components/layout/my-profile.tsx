"use client";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";

const MyProfile = () => {
  return (
    <div className="w-full border-b border-dashed border-[#3A3A3A]">
      <div className="border-x border-dashed border-[#3A3A3A] md:w-[80%] lg:w-[40%] mx-auto py-2 px-2 flex items-center justify-between">
        <div className="flex flex-wrap w-full ">
          <SpotlightCard
            className="cursor-pointer bg-transparent! min-w-sm"
            theme="dark"
            spotlightColor="#ffffff"
            intensity={0.15}
            spotlightSize={240}
            softness={0.7}
            shape="circle"
            borderGlow={0.6}
            proximity={80}
            smoothing={0.3}
            grain={0}
            ambient={false}
            flare
          >
            <div className="flex flex-col flex-wrap m-3 gap-4">
              <div className="rounded-full p-2 w-fit bg-[#3A3A3A]/20">
                <Image
                  src={"/yagami.jpeg"}
                  alt={"lightyagami"}
                  height={100}
                  width={100}
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="flex flex-col -gap-1">
                <p className="font-serif text-3xl text-white font-serif">
                  John Kinuthia
                </p>
                <p className="text-[#B4B4B4] text-sm">Software developer</p>
                <div className="flex items-center mt-3 *:border *:border-[#3A3A3A] *:bg-[#606060]/10 *:text-sm *:py-0.5 *:px-1 *:rounded flex-wrap gap-1">
                  <span>Java</span>
                  <span>Typescript</span>
                  <span>Rust</span>
                  <span>SQL</span>
                </div>
              </div>
              <a href="/contact" className="mt-4 flex ">
                <button className="rounded-full flex items-center justify-center gap-1 cursor-pointer py-2 px-3 w-full m border border-[#3A3A3A]">
                  Get in touch
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
