import { NavLink } from "react-router-dom";

export default function Home(){
    return(
        <section className="h-full flex flex-col  justify-center bg-[#101d26]">
            <p className="font-bold text-2xl ">Venumadhav Kommineni</p>
            <p className="md:w-1/2 mx-auto mb-4 mt-2 text-justify px-4 md:text-center">Full-stack devloper crafting scalable applications. I build efficient and user-friendly web apps with MongoDB, Express.js, React, Next.js and node.js</p>
            <div className="pt-4">
                <NavLink to='/projects' className="mx-2 rounded-lg p-2 bg-[#1073d6] border-2 border-[#1073d6]  hover:border-white" >Projects</NavLink>
                <NavLink to="/contact" className="border-2 mx-2 border-white rounded-lg p-2 hover:border-[#646cff] hover:text-[#646cff]">Contact me</NavLink>
            </div>
        </section>
    )
}