import { Stack } from "@/src/constants/types";
import Image from "next/image";
const StackCard = ({ name, url, image, description }: Stack) => {
  return (
    <a
      href={url}
      className={
        "flex flex-col rounded-lg py-2 bg-[#191919] shadow-xs border border-[#606060]/30 gap-4 grayscale hover:grayscale-0 flex-1 w-fit px-2"
      }
    >
      <div className={"flex gap-3 items-center"}>
        <Image
          src={image}
          height={1000}
          width={1000}
          className={"w-4 h-4 object-cover object-center rounded"}
          alt={name}
        ></Image>
        <div className={"font-bold text-[#7B7B7B]"}>{name}</div>
      </div>
    </a>
  );
};
export default StackCard;
