import React, { useState } from 'react'
import { close, logo, menu } from "../assets/index"
import { navLinks } from "../constants/index"

const NavBar = () => {
  const [open , setOpen ] = useState(false)
  return (
    <nav className=' flex py-6 justify-between items-center navbar ' >
      <img src={logo} alt='HooBank' className=' w-[124px] h-[32px] ' />
      <ul className=' list-none sm:flex hidden justify-end items-center flex-1 gap-8'>
        {navLinks.map((nav, index) => (
          <li
            key={`${nav.id}`}
            className={` font-poppins font-normal cursor-pointer text-[16px] text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className=' sm:hidden flex flex-1 justify-end items-center '>
        <img
          src={open ? close : menu}
          alt='menu'
          className=' w-[28px] h-[28px] object-contain'
          onClick={() => setOpen((prev) => !prev)}
        />
        <div
          className={`${
            open ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='flex flex-col justify-end items-center flex-1 gap-4'>
            {navLinks.map((nav, index) => (
              <li
                key={`${nav.id}`}
                className={` font-poppins font-normal cursor-pointer text-[16px] text-white `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar