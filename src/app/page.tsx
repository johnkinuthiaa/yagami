
import AboutMe from "@/src/components/layout/about-me";
import Socials from "@/src/components/layout/socials";

export default function Home() {
  return (
    <div className={"w-full items-center flex flex-col "}>
        <AboutMe/>
        <Socials/>
    </div>
  );
}
