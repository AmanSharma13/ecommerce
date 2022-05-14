import Link from 'next/link'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import {useState} from 'react'

const Navbar = () => {
    const [value, setValue] = useState(false)
    const toggleDialog = () => {
        setValue(!value)
    }
  return (
        <header className="body-font bg-indigo-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Chhaya Photo Studio</span>
    </a></Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-semibold">
      <Link href={'/frames'}><a className="mr-5 hover:text-gray-900">Frames</a></Link>
      <Link href={'/cups'}><a className="mr-5 hover:text-gray-900">Cups</a></Link>
      <Link href={'/photo'}><a className="mr-5 hover:text-gray-900">Photo</a></Link>
      <Link href={'/album'}><a className="mr-5 hover:text-gray-900">Album </a></Link>
      <Link href={'/contact'}><a className="mr-5 hover:text-gray-900">Contact</a></Link>
      <Link href={'/about'}><a className="mr-5 hover:text-gray-900">About</a></Link>
      
    </nav>
    <BsFillCartFill className='text-2xl'/>
  </div>
</header>
  )
}

export default Navbar