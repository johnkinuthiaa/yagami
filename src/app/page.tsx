
import Header from "@/components/layout/header";
import AboutMe from "@/components/layout/about-me";
import Socials from "@/components/layout/socials";

export default function Home() {
  return (
    <div className={"font-sans w-full md:w-[40%] items-center justify-center my-6 mx-auto  flex flex-col "}>
        <Header/>
        <AboutMe/>
        <Socials/>
    </div>
  );
}
