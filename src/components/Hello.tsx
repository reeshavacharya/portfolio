import Image from "next/image";
import Contact from "./Contact";
import mugshot from "../../public/mugshot.jpeg";
const Hello = () => {
  return (
    <>
      <div className="intro">
        <div className="grid gap-5">
          <div className="flex">
            <h1 className="poppins-bold text-4xl font-bold">Hello There!</h1>
            <h1 className="text-6xl">👋🏼</h1>
          </div>
          <p className="poppins-semibold">
            {" "}
            I&apos;m Reeshav Acharya. I&apos;m a passionate software engineer
            specializing in Web3 and blockchain technologies.
          </p>
          <p className="poppins-semibold">
            I&apos;m constantly exploring new challenges and excited to
            contribute to the evolving digital landscape.
          </p>
          <p className="poppins-extralight">📍 Kathmandu, Nepal</p>
          <Contact />
        </div>
        <div className="circular-frame">
          <Image src={mugshot} alt="Profile Photo" width={300} height={300} />
        </div>
      </div>
    </>
  );
};
export default Hello;
