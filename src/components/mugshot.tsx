import mugshot from "../../public/mugshot.jpeg";
import Image from "next/image";

const Mugshot = () => {
  return (
    <>
      <div className="circular-frame w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
        <Image src={mugshot} alt="Profile Photo" width={300} height={300} />
      </div>
    </>
  );
};
export default Mugshot;
