import Image from "next/image";

const GifSection = () => {
  return (
    <div className="w-full border-b border-dashed border-[#484848]">
      <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto py-2 px-2 flex items-center justify-between">
        <div className="p-2 w-full h-58 sm:h-58 overflow-hidden relative z-0 rounded-xs">
          <Image
            src={"/anime.gif"}
            alt={"homepage gif"}
            height={200}
            width={800}
            className="w-full h-full object-cover rounded-xs h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default GifSection;
