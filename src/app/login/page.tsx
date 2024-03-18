"use client"
import Footer from "../footer/footer"
import Header from "../header/header"
export default function Form() {
    const  handleSubmit = ()=>{
        alert("form submitted!")
    }
    return (
        <>
            <Header />
            <div className="flex justify-center mt-80">

                <form onSubmit={handleSubmit}>
                    <div className=" bg-slate-400 p-28 rounded-md">
                        <div>
                            <label htmlFor="email" className=" mr-20 text-xl">Enter email</label>
                            <input 
                            className="border border-red-500 focus:ring-red-500 focus:border-red-700 rounded py-2 px-3 text-gray-700 leading-tight"
                            type="text" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="password" className=" mr-10 text-xl">Enter Password</label>
                            <input 
                            className=" border border-red-500 focus:ring-red-500 focus:border-red-700 rounded py-2 px-3 text-gray-700 leading-tight"
                            type="text" />
                        </div>
                        <br />
                        <br />
                        <div className="flex items-center px-44">
                            <button 
                            className=" bg-blue-800 px-4 py-2 rounded-lg text-white hover:bg-white hover:text-black"
                            type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}