import Image from "next/image";
import vsCodeImage from "../../public/vscode.jpg";
const AboutMe = () => {
  return (
    <div className="stacks">
      <Image src={vsCodeImage} width={500} height={500} alt={"python"} />
      <div className="grid gap-6">
        <div className="flex gap-4">
          <h1 className="poppins-regular text-4xl font-bold">About Me</h1>
          <h1 className="text-5xl">👦🏻</h1>
        </div>
        <p className="poppins-regular text-space">
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
