
import AboutMe from "@/src/components/layout/about-me";
import Socials from "@/src/components/layout/socials";
import Footer from "@/src/components/layout/footer";

export default function Home() {
  return (
    <div className={"w-full items-center flex flex-col "}>
        <AboutMe/>
        <Socials/>
        <Footer/>
    </div>
  );
}
