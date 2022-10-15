import React from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from "react";
import {Link} from "react-scroll"
const Navbar=()=>{
    const[nav,setNav]=useState(false)
    // const links=[
    //     {
    //         id:1,
    //         link:"Home",
    //     },
    //     {
    //         id:2,
    //         link:"About",
    //     },
    //     {
    //         id:3,
    //         link:"Portfolio",
    //     },
    //     {
    //         id:4,
    //         link:"Experience",
    //     },
    //     {
    //         id:5,
    //         link:"Contact",
    //     }
    // ]

    // return (
    //     <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
    //         <div>
    //             <h1 className="text-5xl font-signature ml-2">Damanjot Singh</h1>
    //         </div>
    //         <ul className="hidden md:flex">
    //            {links.map(link=>
    //            <li key={link.id} className="px-4 cursor-pointer font-medium text-white-500 hover:scale-105 duration-200">{link.link}</li>
    //            )}
    //         </ul>
    //         <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white-500 md:hidden">
    //             {nav?<FaTimes size={30}/> : <FaBars size={30}/>}
    //         </div>
    //         {nav &&<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white-500 ">
    //         {links.map(link=>
    //            <li key={link.id} className="px-4 cursor-pointer py-6 text-4xl">
    //             <Link to ="Portfolio" smooth={true} duration={500}>{link.link}</Link></li>
    //            )}
    //         </ul>}
    //     </div>
    // )
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "portfolio",
        },
        {
          id: 4,
          link: "experience",
        },
        {
          id: 5,
          link: "contact",
        },
      ];
    
      return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
          <div>
            <h1 className="text-5xl font-signature ml-2">Yash</h1>
          </div>
    
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
    
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
    
          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )
}
export default Navbar