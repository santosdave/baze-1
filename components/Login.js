import Image from 'next/image';
import {signIn} from "next-auth/client";
function Login() {
    return (
        
        <div className="grid place-items-center">
            <Image
           src="https://links.papareact.com/5me"
           objectFit="contain"
           width={400} 
           height={400}
           
            />
            <h1  onClick={signIn} className="mt-6 p-5 bg-blue-500 rounded-full cursor-pointer active:border-2 active:border-blue-300 ">SignIn with Facebook</h1>
        </div>
    )
}

export default Login
