import { FaUniversity } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Education = () => {
  return (
    <div className="w-full sm:w-full lg:w-3/5 xl:w-3/5">
      <div className="grid gap-4 lg:gap-6">
        <div className="flex items-center gap-4">
          <h1 className="poppins-regular text-4xl font-bold">Education</h1>
          <h1 className="text-5xl lg:text-5xl sm:text-6xl">👨🏻‍🎓</h1>
        </div>
        <div>
          <h1 className="poppins-thin text-3xl font-bold">
            B.Sc. Computer Science and Information Technology
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-2xl">
            <FaUniversity />
          </p>
          <h1 className="flex poppins-thin gap-3 text-2xl">
            Tribhuvan University
          </h1>
          <p className="flex hidden md:grid poppins-thin gap-3 text-3xl">|</p>
          <h1 className="flex poppins-thin gap-3 text-2xl">
            National College of Computer Studies
          </h1>
        </div>
        <div className="flex gap-4">
          <SlCalender /> 2018 - 2022
        </div>
        <p className="poppins-semibold leading-loose">
          I pursued my Bachelor’s degree in Computer Science and Information
          Technology at National College of Computer Studies, where I delved
          into a variety of fascinating subjects. My coursework included Data
          Structures and Algorithms, Artificial Intelligence, and Cryptography,
          among others. I also explored Statistics, Object-Oriented Programming,
          Theory of Computation, and Database Management Systems. This diverse
          academic experience equipped me with a strong foundation in both the
          theoretical and practical aspects of computer science.
        </p>
      </div>
    </div>
  );
};
export default Education;
