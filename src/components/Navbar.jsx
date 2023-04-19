import Logo from '../assest/3ming_logo.jpg'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


   const Navbar = () => {
     //   usestate is used for close menu or open menu view
   
     const [nav, setNav] = useState(false);
   
     const handleClick = () => {
       return setNav(!nav);
     };
   
   
     return (
       <div className="absolute w-full h-[88px] flex justify-between items-center px-4 bg-[#000000] text-white   ">
       
             {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden cursor-pointer z-10 md:justify-between ">
           {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
         </div>
         <div>
          <img src={Logo} alt="LogoImage" style={{width:'220px' }} className="xl:ml-4 mr-20 pr-12 xl:mr-0 xl:pr-0 "/>
         </div>
         
         {/* Menu */}
   
         <ul className="hidden md:flex lg:text-xl justify-between mx-1  font-medium  cursor-pointer">
           <li className=" mx-6   sm:text-lg ">Home</li>
           <li className=" mx-6   sm:text-lg ">About</li>
           <li className=" mx-6   sm:text-lg ">Stream</li>
           <li className=" mx-6   sm:text-lg ">Promote</li>
           <li className=" mx-16  sm:text-lg ">Blog</li>
         </ul>
      

        
   
         {/* Mobile Menu */}
   
         <ul
           className={
             !nav
               ? "hidden"
               : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
           }
         >
           <li className="py-6 text-4xl">Home</li>
           <li className="py-6 text-4xl">About</li>
           <li className="py-6 text-4xl">Stream</li>
           <li className="py-6 text-4xl">Promote</li>
           <li className="py-6 text-4xl">Blog</li>
         </ul>
   </div>
     );
 }  
     
export default Navbar;