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
                Reeshav Acharya
              </h1>
              {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl">👋🏼</h1> */}
            </div>
            <h2 className="poppins-semibold sm:text-xl lg:text-2xl font-bold">
              Ph.D Student in Computer Engineering
            </h2>
            <h2 className="poppins-semibold sm:text-xl lg:text-xl font-bold">
              Bellini College of AI, Cybersecurity, and Computing
            </h2>
            <div className="flex items-center gap-2">
              <h2 className="poppins-semibold sm:text-xl lg:text-xl font-bold">
                📍
              </h2>
              <h2 className="poppins-semibold sm:text-xl lg:text-xl font-bold">
                University of South Florida
              </h2>
              <h2 className="poppins-semibold sm:text-xl lg:text-xl font-bold">
                |
              </h2>
              <h2 className="poppins-semibold sm:text-xl lg:text-xl font-bold">
                Tampa, FL - USA
              </h2>
            </div>

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
