import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contacts from "../components/Contacts";

const contacts=[
    {src:"https://links.papareact.com/f0p", name:"Jeff Bezoz"},
    {src:"https://links.papareact.com/kxk", name:"Elon Musk"},
    {src:"https://links.papareact.com/zvy", name:"Bill Gates"},
    {src:"https://links.papareact.com/snf", name:"Mark zuckerberg"},
    {src:"https://links.papareact.com/d0c", name:"Harry Poter"},
    {src:"https://links.papareact.com/6gg", name:"The Queen"},
    {src:"https://links.papareact.com/r57", name:"James Bond"},
];
function Widget() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5 ">
                <h2 className="text-xt">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>

                </div>
            </div>
            {contacts.map(contact =>(
                <Contacts key={contact.src} src={contact.src} name={contact.name}/>
            ))}
        </div>
    );
}

export default Widget
