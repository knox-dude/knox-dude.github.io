import { FaMugHot, FaCircleInfo } from "react-icons/fa6"

const SideBar = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow-lg">
      <SideBarIcon icon={<FaMugHot size={28} />} />
      <SideBarIcon icon={<FaCircleInfo size={28} />} />
      </div>
    </div>
  )
}

interface SideBarIconProps {
  icon: React.ReactNode;
  text?: string;
}

const SideBarIcon = ({ icon, text="tooltip 💡" }: SideBarIconProps) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default SideBar