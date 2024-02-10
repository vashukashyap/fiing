import { Inter } from "next/font/google";
import "./globals.css";
import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import Logo from "@/assets/images/fiingLogo.svg";
import UserImage from "@/assets/images/demoUser.jpg";
import SideNavbar from "@/components/SideNavbar/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
      <section>
        <DashboardNavbar logo={Logo} userimage={UserImage} username={"Ankit"}/>
        <div className="flex flex-row">
            <div>
            <SideNavbar/>
            </div>
            
            <div className="overflow-scroll relative">
            {children}
            </div>
        </div>
          
        </section>
        </body>
    </html>
  );
}
