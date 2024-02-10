import Advantages from "@/components/Advantages/Advantages";
import BrandsSection from "@/components/BrandsSection/BrandsSection";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Footer from "@/components/Footer/Footer";
import Jumboster from "@/components/Jumboster/Jumboster";
import Image from "next/image";
import Logo from "@/../public/Logo.svg";
import CreateCompanyButton from "@/components/CreateCompanyButton/CreateCompanyButton";
import DashboardImage from "@/assets/images/dashboardImage.png";

export default function Home() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-semibold my-2">Accounts</h1>
        <h3 className="my-2">
          You have no clients accounts yet. Create an account to get started.
        </h3>
        <div className="my-8">
          <CreateCompanyButton />
        </div>
        <Image
          className="absolute right-0 bottom-0"
          src={DashboardImage}
          alt="background image not found"
        />
      </div>
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//     <Jumboster/>
//     <FeatureSection/>
//     <Advantages/>
//     <BrandsSection/>
//     <FaqsSection/>
//     <Footer logo={Logo}/>
//     </>
//   );
// }
