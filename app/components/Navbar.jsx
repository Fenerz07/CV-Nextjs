"use client";
import React ,{useState }from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XCircleIcon, HomeModernIcon } from '@heroicons/react/24/solid'

const navLink = [
  {
    path: '#menu',
    title: 'Menu'
  },
  {
    path: '#about',
    title: 'About'
  },
  {
    path: '#contact',
    title: 'Contact'
  }
]

const Navbar = () => {
    const [navbarOpen, setnavbarOpen] = useState(false)
    return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 text-white'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8 text-white'>
        <Link href={"/"} aria-label="ReturntoTop Icon"><HomeModernIcon className='h-10 w-10 text-white' /></Link>
        <div className='mobile-menu block md:hidden'>
            {!navbarOpen ? ( 
                <button aria-label="Open Phone Navigation" className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white' onClick={() => setnavbarOpen(true)}>
                    <Bars3Icon className='h-6 w-6 text-white' />
                </button>
                ) : (
                <button aria-label="Close Phone Navigation" onClick={() => setnavbarOpen(false)}>
                    <XCircleIcon className='h-6 w-6 text-white' />
                </button>
            )}
        </div>
        <div className='menu hidden md:block md:w-auto ' id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white'>
                {navLink.map((link, index) => (
                    <li key={index}>
                    <Navlink href={ link.path } title={ link.title } />
                    </li>
                ))}
            </ul>
        </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLink}/> }
        </nav>
  );
};

export default Navbar;