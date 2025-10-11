import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hello from "@/components/Hello";
import Mugshot from "@/components/mugshot";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <div className="grid items-center justify-items-center min-w-screen min-h-screen gap-8 p-4 sm:p-6 lg:p-6">
        <Hello />
        <div className="block lg:hidden">
          <Mugshot />
        </div>
        {/* <TechStack /> */}
        {/* <AboutMe /> */}
        {/* <Projects /> */}
        {/* <Education /> */}
        {/* <Experience /> */}
        <div className="grid justify-center">
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
}
