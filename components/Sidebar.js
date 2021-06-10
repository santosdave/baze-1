import {ChevronDownIcon,  UserGroupIcon } from "@heroicons/react/outline";
import {CalendarIcon, ShoppingBagIcon,ClockIcon, DesktopComputerIcon, UsersIcon } from "@heroicons/react/solid";
import SidebarRow from "../components/SidebarRow";
function Sidebar() {
    return (
        <div className="p-2 mt-4 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={"https://links.papareact.com/5me"} title={"Santos Dave"}/>
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>
             
        </div>
    )
}

export default Sidebar
