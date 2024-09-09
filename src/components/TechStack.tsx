import Image from "next/image";

const TechStack = () => {
  return (
    <>
      <div className="stacks">
        <h1 className="poppins-regular text-2xl font-bold">Tech Stack</h1>
        <Image src="/python.png" width={30} height={30} alt={"python"} />
        <Image src="/haskell.png" width={35} height={35} alt={"haskell"} />
        <Image src="/javascript.png" width={30} height={30} alt={"javascript"} />
        <Image src="/typescript.png" width={30} height={30} alt={"typescript"} />
        <Image src="/cpp.png" width={30} height={30} alt={"c++"} />
        <Image src="/java.webp" width={35} height={35} alt={"java"} />
      </div>
    </>
  );
};
export default TechStack;
