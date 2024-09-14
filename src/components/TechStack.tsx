import Image from "next/image";
import pythonLogo from "../../public/python.png"; // Adjust the path accordingly
import haskellLogo from "../../public/haskell.png";
import jsLogo from "../../public/javascript.png";
import tsLogo from "../../public/typescript.png";
import cppLogo from "../../public/cpp.png";
import javaLogo from "../../public/java.webp";
const TechStack = () => {
  return (
    <>
      <div className="lg:flex md:grid lg:gap-12 sm:grid-cols-3 sm:gap-4 w-full sm:w-full lg:w-3/5 xl:w-3/5">
        <div className="block md:hidden">&nbsp;</div>

        <div className="col-span-3 flex items-center justify-center">
          <h1 className="poppins-regular text-2xl font-bold">Tech Stack</h1>
        </div>
        <div className="block md:hidden">&nbsp;</div>

        <div className="col-span-3 lg:gap-12 gap-5 flex items-center justify-center">
          <Image src={pythonLogo} width={30} height={30} alt={"python"} />
          <Image src={haskellLogo} width={35} height={35} alt={"haskell"} />
          <Image src={jsLogo} width={30} height={30} alt={"javascript"} />
        </div>
        <div className="block md:hidden">&nbsp;</div>

        <div className="col-span-3 lg:gap-12 gap-5 flex items-center justify-center">
          <Image src={tsLogo} width={30} height={30} alt={"typescript"} />
          <Image src={cppLogo} width={30} height={30} alt={"c++"} />
          <Image src={javaLogo} width={35} height={35} alt={"java"} />
        </div>
      </div>
    </>
  );
};

export default TechStack;
