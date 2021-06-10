import Image from 'next/image';
import HeaderIcon from '../components/HeaderIcon';
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon} from "@heroicons/react/solid";
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
function Header() {
    return (
        <div>
            {/* Left */}
            <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
                
                <Image
                    src="https://links.papareact.com/5me"
                    layout="fixed"
                    width={40}
                    height={40}
                />
                <div className="flex ml-2 rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" width={30} height={30} />
                    <input className="hidden md:inline-flex ml-2 bg-transparent items-center outline-none flex-shrink placeholder-gray-500" type="text" placeholder="Search Facebook"/>
                </div>
            {/* Center */}
                <div className="flex justify-center flex-grow ">
                    <div className="flex space-x-6 md:space-x-2">
                        <HeaderIcon active Icon={HomeIcon}/>
                        <HeaderIcon Icon={FlagIcon}/>
                        <HeaderIcon Icon={PlayIcon}/>
                        <HeaderIcon Icon={ShoppingCartIcon}/>
                        <HeaderIcon Icon={UserGroupIcon}/>
                        
                    </div>
                </div>
            {/* Right */}
                <div className="flex items-center sm:space-x-2 justify-end">
                    {/* Profile Pic */}
                    <Image
                    src="https://links.papareact.com/5me"
                    width="40"
                    height="40"
                    layout="fixed"
                    classname="rounded-full cursor-pointer"
                    />
                    <p className="whitespace-nowrap pr-3 font-semibold">Santos Dave</p>
                    <ViewGridIcon className="icon"/>
                    <ChatIcon className="icon"/>
                    <BellIcon className="icon"/>
                    <ChevronDownIcon className="icon"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
