import Image from "next/image"
export default function Home() {
  return (
    <div className={"font-sans"}>
        <header>
            <Image alt={"yagami"} src={"/yagami.png"} width={100} height={100}/>
        </header>
        my personal space
    </div>
  );
}
