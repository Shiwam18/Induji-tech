"use client"
import Image from "next/image"
import myImg from "../public/shiwamlogo2.png"
import { useRouter } from "next/navigation"
export default function Header(){
    const Router = useRouter()
    function handleLoginClick() {
        Router.push("/login")
    }
    function handleRegisterClick() {
        Router.push("/register")
    }
    return (
        <>
        <div h-60>
            <nav className=" h-32 bg-violet-400 rounded-xl flex justify-between">
                <div>
                    
                    <Image src={myImg} alt="no image" width={140} className="px-4"/>
                </div>
                
                <div className="flex justify-evenly w-80">
                    <div className="">
                        <button 
                        onClick={handleLoginClick}
                        className="px-4 py-2 text-white ring-black rounded-3xl hover:bg-white hover:text-black ring-2 mt-8 ">
                            Login
                        </button>
                    </div>
                    <div>
                        <button
                        onClick={handleRegisterClick} 
                        className="px-4 py-2 text-white ring-2 mt-8 ring-black rounded-3xl hover:bg-white hover:text-black">
                            Register
                        </button>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}