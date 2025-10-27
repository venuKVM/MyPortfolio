import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="bg-[#101822] sticky top-0 py-2 w-full flex justify-center gap-x-3.5  overflow-hidden shrink-0 border-b border-b-gray-700 mx-4 ">
      <NavLink to='/' className={({isActive})=>isActive?"bg-[#101822] font-bold border-2 border-[#101822]":"bg-[#101822] border-2 border-[#101822] hover:text-[#646cff]"}>Home</NavLink>
      <NavLink to='/AboutMe' className={({isActive})=>isActive?"bg-[#101822] font-bold border-2 border-[#101822]":"bg-[#101822] border-2 border-[#101822] hover:text-[#646cff]"}>About</NavLink>
      <NavLink to="/projects"className={({isActive})=>isActive?"bg-[#101822] font-bold border-2 border-[#101822]":"bg-[#101822] border-2 border-[#101822] hover:text-[#646cff]"}>Projects</NavLink>
      <NavLink to="/contact" className={({isActive})=>isActive?"bg-[#101822] font-bold border-2 border-[#101822]":"bg-[#101822] border-2 border-[#101822] hover:text-[#646cff]"}>Contact</NavLink>
    </nav>
    <Outlet/>
    </>
  );
}
