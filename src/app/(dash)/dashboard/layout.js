import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import Logo from "@/assets/images/fiingLogo.svg";
import UserImage from "@/assets/images/demoUser.jpg";
import SideNavbar from "@/components/SideNavbar/SideNavbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <section className="w-full h-fit">
          <DashboardNavbar
            logo={Logo}
            userimage={UserImage}
            username={"Ankit"}
          />
          <div className="flex flex-row h-[90vh]">
            <div className="">
              <SideNavbar />
            </div>

            <div className=" overflow-y-scroll w-full">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
