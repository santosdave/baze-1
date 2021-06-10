import Image from 'next/image';

import {ChatIcon, ShareIcon, ThumbUpIcon} from '@heroicons/react/outline';

function Post({name,message,email,postImage, image, timestamp}) {
    return (
        <div className="flex flex-col ">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <img
                        className="rounded-full"
                        src={image}
                        height="40"
                        width="40"
                        alt=""
                    />
                
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-400">
                            {/* {new Date(timestamp?.toDate()).toLocaleDateString()
                            } */}
                            {timestamp}
                        </p>
                    </div>
                </div>
                <p className="pt-4 ">{message}</p>
                <div className=" relative mt-6 h-56 md:h-56 bg-white">
                    <Image src={postImage} objectFit="cover" layout="fill"/>
                </div>
                
            </div>
             {/* Footer of Post */}
             <div className="flex justify-between items-center rounded-b-xl shadow-md bg-white text-gray-400 border-t">
                    <div className="inputIcon">
                            <ThumbUpIcon className="h-4 rounded-bl"/>
                            <p className="text-xs sm:text-base">Like</p>
                    </div>
                    <div className="inputIcon">
                            <ChatIcon className="h-4"/>
                            <p className="text-xs sm:text-base">Comment</p>
                    </div>
                    <div className="inputIcon">
                            <ShareIcon className="h-4 rounded-br"/>
                            <p className="text-xs sm:text-base">Share</p>
                    </div>
                </div>
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center space-x-2">
                    <img
                        className="rounded-full"
                        src={image}
                        height="40"
                        width="40"
                        alt=""
                    />
                <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-400">
                            {/* {new Date(timestamp?.toDate()).toLocaleDateString()
                            } */}
                            {timestamp}
                        </p>
                </div>
                </div>
                    <p className="pt-4 ">{message}</p>
                <div className=" relative mt-6 h-56 md:h-56 bg-white">
                    <Image src={postImage} objectFit="cover" layout="fill"/>
                </div>
                
            </div>
                {/* Footer of Post */}
                <div className="flex justify-between items-center rounded-b-xl shadow-md bg-white text-gray-400 border-t">
                    <div className="inputIcon">
                            <ThumbUpIcon className="h-4 rounded-bl"/>
                            <p className="text-xs sm:text-base">Like</p>
                    </div>
                    <div className="inputIcon">
                            <ChatIcon className="h-4"/>
                            <p className="text-xs sm:text-base">Comment</p>
                    </div>
                    <div className="inputIcon">
                            <ShareIcon className="h-4 rounded-br"/>
                            <p className="text-xs sm:text-base">Share</p>
                    </div>
                </div>
        </div> 
           
            
    
    )
}

export default Post
