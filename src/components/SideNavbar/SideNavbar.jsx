import Image from "next/image";
import AccountIcon from "@/assets/images/icons/accountsIcon.svg";
import SettingIcon from "@/assets/images/icons/settingIcon.svg";
import HelpIcon from "@/assets/images/icons/helpIcon.svg";

const SideNavbar = () => {
  return (
    <>
      <aside className="z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 border-r border-gray-300">
        <div className="h-full px-6 py-8 overflow-y-auto">
          <h1 className="text-gray-700 mb-2">Menu</h1>
          <ul className="flex flex-col gap-6 text-md font-semibold my-2 ">
            <li className="flex flex-row gap-2">
              <Image src={AccountIcon} alt="Icon not found" />
              Accounts
            </li>
            <hr className="mr-8" />
            <li className="flex flex-row gap-2">
              <Image src={SettingIcon} alt="Icon not found" />
              Setting
            </li>
            <li className="flex flex-row gap-2">
              <Image src={HelpIcon} alt="Icon not found" />
              Help
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideNavbar;
