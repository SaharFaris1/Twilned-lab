import React from 'react'
import { IoMdMenu } from "react-icons/io";

function Nav() {
  return (
<div> 
<nav className="flex lg:block  justify-center content-center text-black items-center ps-8 h-7  bg-amber-300">
<ul className=" md:flex flex-wrap hidden justify-center gap-6 font-bold ">
<li className="hover:text-white"> ALL CATEGORIWS</li>
<li className="hover:text-white"> TODAY DEALS</li>
<li className="hover:text-white">ELECTRONIC</li>
<li className="hover:text-white">CLOTHING</li>
<li className="hover:text-white">COMPUTERS</li>
<li className="hover:text-white">FURNTURES</li>
<li className="hover:text-white">MOM & BABY</li>
<li className="hover:text-white">BOOKS & MORE</li>
</ul>
<IoMdMenu className="md:hidden"/>
</nav>
</div>
  )
}

export default Nav