import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hello from "@/components/Hello";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid items-center justify-items-center min-h-screen">
        &nbsp;
        <Hello />
        <TechStack />
        <AboutMe />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
