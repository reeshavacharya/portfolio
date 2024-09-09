import Image from "next/image";
import Contact from "./Contact";
import TechStack from "./TechStack";

const Hello = () => {
  return (
    <>
      <div className="intro">
        <div className="grid">
          <div className="flex">
            <h1 className="poppins-bold text-4xl font-bold">
              Software Engineer
            </h1>
            <h1 className="text-6xl">👋🏼</h1>
          </div>
          <p className="poppins-regular">Web3 & Blockchain</p>
          &nbsp;
          <p className="poppins-semibold">
            {" "}
            Hello! I'm Reeshav Acharya. I'm a passionate software engineer
            specializing in Web3 and blockchain technologies.
          </p>
          <p className="poppins-semibold">
            I'm constantly exploring new challenges and excited to contribute to
            the evolving digital landscape.
          </p>
          &nbsp;
          <p className="poppins-extralight">📍 Kathmandu, Nepal</p>
          &nbsp;
          <Contact />
        </div>
        <div className="circular-frame">
          <Image
            src="/mugshot.jpeg"
            alt="Profile Photo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};
export default Hello;
