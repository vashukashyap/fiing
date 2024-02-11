import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/../public/Logo.svg";
import LogoM from "@/assets/images/fiingLogo.svg";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar logo={LogoM} />
      <div className='h-[38.25vh] flex items-center justify-center'>
        <div className='text-5xl font-bold  leading-tight'>
          Comming
          <span className='text-blue-500 ml-2 relative'>
            Soon
            <span className='bg-purple-500 h-[3px] w-16 absolute bottom-[2px] -left-2 -rotate-6' />
          </span>
        </div>
      </div>
      <Footer logo={Logo} />
    </div>
  );
};

export default page;
