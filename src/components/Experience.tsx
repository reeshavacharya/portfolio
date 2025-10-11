import { FaUniversity } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Experience = () => {
    return (
        <div className="w-full sm:w-full lg:w-3/5 xl:w-3/5">
            <div className="grid gap-4 lg:gap-6">
                <div className="flex items-center gap-4">
                    <h1 className="poppins-regular text-4xl font-bold">Experience</h1>
                    <h1 className="text-5xl lg:text-5xl sm:text-6xl">🧑🏻‍💻</h1>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="poppins-thin text-3xl font-bold">
                        Sireto Technology
                    </h1>
                    <h1 className="poppins-thin text-3xl font-bold">
                        |
                    </h1>
                    <h1 className="poppins-thin text-3xl font-bold">
                        Web3 Software Engineer
                    </h1>
                </div>
                <div className="flex gap-4">
                    <SlCalender /> 2018 - 2025
                </div>
            </div>
        </div>
    );
};
export default Experience;
