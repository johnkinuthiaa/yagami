"use client";
import AboutMe from "@/src/components/layout/about-me";
import Socials from "@/src/components/layout/socials";
import Footer from "@/src/components/layout/footer";
import MyProfile from "../components/layout/my-profile";
import GifSection from "../components/layout/gif-section";
import Stack from "../components/layout/stack";
import Projects from "../components/layout/projects";

export default function Home() {
  return (
    <div className={"w-full items-center flex flex-col "}>
      <GifSection />
      <MyProfile />
      <AboutMe />
      <Projects />
      <Stack />
      <Socials />
      <Footer />
    </div>
  );
}
