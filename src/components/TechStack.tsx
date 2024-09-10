import Image from "next/image";
import pythonLogo from "../../public/python.png"; // Adjust the path accordingly
import haskellLogo from "../../public/haskell.png";
import javascriptLogo from "../../public/javascript.png";
import typescriptLogo from "../../public/typescript.png";
import cppLogo from "../../public/cpp.png";
import javaLogo from "../../public/java.webp";
const TechStack = () => {
  return (
    <>
      <div className="stacks">
        <h1 className="poppins-regular text-2xl font-bold">Tech Stack</h1>
        <Image src={pythonLogo} width={30} height={30} alt={"python"} />
        <Image src={haskellLogo} width={35} height={35} alt={"haskell"} />
        <Image src={javascriptLogo} width={30} height={30} alt={"javascript"} />
        <Image src={typescriptLogo} width={30} height={30} alt={"typescript"} />
        <Image src={cppLogo} width={30} height={30} alt={"c++"} />
        <Image src={javaLogo} width={35} height={35} alt={"java"} />
      </div>
    </>
  );
};
export default TechStack;
