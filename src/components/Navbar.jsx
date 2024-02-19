

import React from "react";
import { styles, } from "../constant"; 


const Navbar = () => {
  return (

    <header className="border-b border-black border-opacity-10">
  <div className={`${styles.container}`}>
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-black" href="/home">
          <span className="sr-only">Home</span>
          <img src="/src/assets/home/logo.svg" alt="Ginko Logo" />
         
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-Black font-semibold transition hover:text-gray-500/75" href="/features"> Features </a>
            </li>
            <li>
            <a className="text-Black font-semibold transition hover:text-gray-500/75" href="/features"> Support </a>
            </li>
            <li>
            <a className="text-Black font-semibold transition hover:text-gray-500/75" href="/features"> Blog </a>
            </li>




          </ul>
        </nav>
      </div>
  

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md px-5 py-2.5 text-sm font-medium text-Blue"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-Blue px-5 py-2.5 text-sm font-medium text-white"
              href="#"
            >
              Open Account
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

     
   
  );
};

export default Navbar;
