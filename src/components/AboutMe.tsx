import Image from "next/image";
import vsCodeImage from "../../public/vscode.jpg";
const AboutMe = () => {
  return (
    <div className="items-center justify-items-center w-full lg:w-3/5 xl:w-3/5 grid lg:grid-cols-2 lg:gap-12 sm:gap-4">
      <Image src={vsCodeImage} width={500} height={500} alt="VS Code" />
      <div className="block sm:hidden">&nbsp;</div>
      <div className="block md:hidden">&nbsp;</div>
      <div className="grid gap-4 lg:gap-6 sm:mt-2">
        <div className="flex items-center gap-4">
          <h1 className="poppins-regular text-4xl font-bold">About Me</h1>
          <h1 className="text-5xl lg:text-5xl sm:text-6xl">👦🏻</h1>
        </div>
        <p className="poppins-semibold lg:text-md leading-loose">
          I am a dedicated software engineer with a passion for Web3, Blockchain
          and Decentralized Finance. With a solid foundation in developing
          decentralized applications (DApps), smart contracts, web applications,
          testing, and auditing, I focus on creating innovative and scalable
          solutions. My expertise spans across various programming languages and
          technologies, including Python, Haskell, JavaScript, TypeScript, C++,
          and Java. I am committed to a strong work ethic and believe in the
          power of collaboration. I thrive in team environments where diverse
          perspectives drive creative problem-solving and high-quality outcomes.
          Constantly exploring new technologies and staying up-to-date with
          industry trends, I am driven by a commitment to excellence and a
          collaborative spirit.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
