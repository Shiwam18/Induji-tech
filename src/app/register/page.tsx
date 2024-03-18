"use client"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useState } from "react"
export default function RegisterForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    // const [formData,setFormData]=useState({
    //     name:"",
    //     email:"",
    //     password:"",
    //     phone:"",
    // });

// const handleChange=(e)=>{
//    setFormData({...formData, [e.target.name]:e.target.value})
// }
    const checkEmail = ()=>{
        if(email.length<=0) alert("email cannot be empty");
        for(let i=0; i<email.length; i++){
            if(email[i]==='@') return true;
        }
        return false;
    }
    const checkName = () => {
        if(name.length<=3) alert("name too short");
        else return true;
    }
    const checkPhone = () => {
        if(phone.length<10) alert("phone number too short");
        for(let i=0; i<phone.length; i++){
            if(phone[i]>='0' && phone[i]<='9') continue;
            else alert("Invalid phone number")
        }
        return true;
    }
    const handleSubmit = () => {
        if(password===confirm && checkEmail() && checkName() && checkPhone()) alert("registration completed!");
    }


    return(
        <>

        <Header/>

        <div className=" flex justify-center mt-40">
            <form onSubmit={handleSubmit}>
                <div className=" bg-slate-500 p-28 rounded-md">

                    <div>
                        <label htmlFor="name" className=" mr-[95px] text-lg">Name</label>
                        <input type="text"  id="name" name="name" className=" ring-1 " onChange={(e)=>setName(e.target.value)}/>
                    </div> <br /><br />

                    <div>
                        <label htmlFor="email" className=" mr-[100px] text-lg">Email</label>
                        <input type="text"  id="email" name="email" className=" ring-1 " onChange={(e)=>setEmail(e.target.value)} />
                    </div> <br /><br />

                    <div>
                        <label htmlFor="phone" className=" mr-[62px] text-lg">Phone No</label>
                        <input type="text"  id="phone" name="phone" className=" ring-1 " onChange={(e)=>setPhone(e.target.value)} />
                    </div> <br /><br />

                    <div>
                        <label htmlFor="password" className=" mr-[63px] text-lg">Password</label>
                        <input type="text"  id="password" name="password" className=" ring-1 " onChange={(e)=>setPassword(e.target.value)}/>
                    </div> <br /><br />

                    <div>
                        <label htmlFor="confirm" className=" mr-[65px] text-lg">Confirm <br /> Password</label>
                        <input type="text"  id="confirm" name="confirm" className=" ring-1 " onChange={(e)=>setConfirm(e.target.value)} />
                    </div><br /><br />

                    <div className="px-40 mt-10">
                        <button className="px-4 py-2 bg-lime-600 text-white font-medium rounded-lg hover:bg-slate-50 hover:text-black">Register</button>
                    </div>

                </div>
                
            </form>

        </div>
        <Footer />
        
        
        </>
    )
}