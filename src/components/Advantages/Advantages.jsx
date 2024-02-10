"use client";
import Image from "next/image";
import AnimationImg from "@/assets/images/Animation.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <div className='flex flex-col gap-2 px-24 py-12'>
        <h1 className='text-3xl font-semibold'>
          Why use
          <span className='absolute ml-2'>
            Fiing?
            <span className='bg-purple-500 h-[3px] w-14 absolute -bottom-2 left-1 -rotate-6' />
          </span>
        </h1>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col gap-6 w-1/2'>
            <h2 className='border border-gray-300 px-8 py-3 rounded-lg self-stretch'>
              Time-Efficient Automation
            </h2>
            <h2 className='border border-gray-300 px-8 py-3 rounded-lg self-stretch'>
              Error-Free Accuracy
            </h2>
            <h2 className='border border-gray-300 px-8 py-3 rounded-lg self-stretch'>
              Adaptable to Your Workflow
            </h2>
            <h2 className='border border-gray-300 px-8 py-3 rounded-lg self-stretch'>
              Enhanced Financial Insights
            </h2>
          </div>
          <div className='flex items-center justify-center'>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={
                isInView
                  ? { rotate: 30, scale: 1.2 }
                  : { rotate: 360, scale: 0.5 }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
              }}
            >
              <Image className='w-[26rem]' src={AnimationImg} />
            </motion.div>
            <div className='h-[20rem] w-[20rem] bg-[#D6BBFB] rounded-full absolute -z-10'></div>
            <div ref={ref}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;
