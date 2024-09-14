// import Image from "next/image";
import Contact from "./Contact";
import Mugshot from "./mugshot";

const Hello = () => {
  return (
    <>
      <div className="w-full sm:w-full lg:w-3/5 xl:w-3/5">
        <div className="grid gap-1 lg:grid-cols-3 items-center">
          <div className="col-span-2 grid lg:gap-2 sm:p-4 lg:p-6">
            <div className="flex items-center gap-2">
              <h1 className="poppins-bold text-4xl sm:text-3xl lg:text-4xl font-bold">
                Hello There!
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">👋🏼</h1>
            </div>
            <p className="poppins-semibold leading-loose">
              I&apos;m Reeshav Acharya. I&apos;m a passionate software engineer
              specializing in Web3 and blockchain technologies. I&apos;m
              constantly exploring new challenges and excited to contribute to
              the evolving digital landscape.
            </p>
            <p className="poppins-extralight leading-loose">
              📍 Kathmandu, Nepal
            </p>
            <div className="grid justify-center lg:justify-start">
              <Contact />
            </div>
          </div>
          <div className="hidden lg:grid justify-center">
            <Mugshot />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hello;
