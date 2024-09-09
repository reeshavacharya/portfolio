import { FaUniversity } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Education = () => {
  return (
    <>
      &nbsp;
      <div className="stacks">  
        <div className="flex gap-4">
          <h1 className="poppins-regular text-4xl font-bold">Education</h1>
          <h1 className="text-5xl">👨🏻‍🎓</h1>
        </div>
      </div>
      <div className="stacks">
        <div className="grid gap-6">
          <h1 className="poppins-thin text-3xl font-bold">
            B.Sc. Computer Science and Information Technology
          </h1>
          <div className="flex gap-4 text-2xl">
            <FaUniversity />
            <p className="poppins-thin">Tribhuvan University</p>
            <p>|</p>
            <p className="poppins-thin">National College of Computer Studies</p>
          </div>
          <div className="flex poppins-thin text-sm">
            {" "}
            <SlCalender /> &nbsp; 2018 - 2022
          </div>

          <p className="poppins-regular text-space">
            I pursued my Bachelor’s degree in Computer Science and Information
            Technology at National College of Computer Studies, where I delved
            into a variety of fascinating subjects. My coursework included Data
            Structures and Algorithms, Artificial Intelligence, and
            Cryptography, among others. I also explored Statistics,
            Object-Oriented Programming, Theory of Computation, and Database
            Management Systems. This diverse academic experience equipped me
            with a strong foundation in both the theoretical and practical
            aspects of computer science.
          </p>
        </div>
      </div>
    </>
  );
};
export default Education;
