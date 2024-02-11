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
import LogoM from "@/assets/images/fiingLogo.svg";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar logo={LogoM} />
      <Jumboster />
      <FeatureSection />
      <Advantages />
      <BrandsSection />
      <FaqsSection />
      <Footer logo={Logo} />
    </>
  );
}
