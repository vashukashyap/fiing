import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import JumbosterImage from "@/assets/images/jumbosterImage.png";

const Jumboster = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center z-1 relative">
        {/* Corner Circle */}
        <div className="absolute -top-44 -left-44 w-80 h-80 rounded-full border-2 border-gray-200" />
        <div className="absolute -top-28 -left-32 w-80 h-80 rounded-full border-2 border-gray-200" />

        <div className="z-10 flex flex-col items-start gap-8 ml-24">
          <h1 className="text-5xl font-bold w-[120%]">
            Your Fintech Solution <br /> for Effortless <br /> Accounting with
            <span className="text-blue-500 ml-2 relative">
              AI
              <span className="bg-purple-500 h-[3px] w-16 absolute bottom-[2px] -left-2 -rotate-6" />
            </span>
          </h1>
          <button className="flex flex-row items-center bg-gradient-to-r from-purple-400 to-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-lg">
            Try Fiing <MdOutlineKeyboardArrowRight />
          </button>
        </div>
        <div>
          <Image src={JumbosterImage} />
        </div>
      </div>
    </>
  );
};

export default Jumboster;
