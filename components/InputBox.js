import Image from 'next/image';
import {EmojiHappyIcon} from '@heroicons/react/outline';
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/outline';
function InputBox() {
    /* const sendPost= (e) =>{
        e.preventDefault();
    } */
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                
                <Image
                classname="rounded-full"
                src={"https://links.papareact.com/zof"}
                width={40}
                height={40}
                layout="fixed"/>
                <form classname="flex flex-1">
                    <input
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                     type="text"
                     placeholder={`What's on your mind, ${"Santos Dave"}?`}/>
                </form>
                <button hidden /* onClick={sendPost} */ type="submit">Submit</button>       
            </div>
            <div className="flex  justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-400 "/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300 "/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
                
            </div>
        </div>
    )
}

export default InputBox
