import Link from 'next/link'
import React from 'react'
import { BsFillCartFill, BsBagCheckFill } from 'react-icons/bs';
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle, AiFillCloseCircle } from 'react-icons/ai';
import {useRef} from 'react'

const Navbar = ({clearCart, addToCart, removeFromCart}) => {
  const ref = useRef()
    const toggleCart =()=>{
      if (ref.current.classList.contains('translate-x-full')){
          ref.current.classList.remove('translate-x-full')
          ref.current.classList.add('translate-x-0')
      }else if(!ref.current.classList.contains('translate-x-full')){
          ref.current.classList.remove('translate-x-0')
          ref.current.classList.add('translate-x-full')
      }
  }
  
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
    <BsFillCartFill onClick={toggleCart} className='text-2xl'/>

    {/* side cart */}
    <div ref={ref} className={`w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-indigo-200 px-8 py-10 transform transition-transform translate-x-full' }`}>
        <h2 className='font-bold text-xl text-center'>Shpping cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-3 cursor-pointer text-2xl text-indigo-500"><AiFillCloseCircle/></span>
        <ol className='list-decimal font-semibold'>
            <li>
                <div className="item flex my-5">

                <div className='w-2/3 font-semibold'>Premium frames</div>
                <div className='flex items-center justify-center font-semibold w-1/3 text-lg'>
                    <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varint)}} className='cursor-pointer mx-1 text-indigo-500 '/>
                    2
                    <AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].varint)}} className='cursor-pointer mx-1 text-indigo-500 ' />
                </div>
                </div>
            </li>
        </ol>
        <div className="font-bold my-3">Subtotal: </div>

        <div className="flex">

        <Link href={'/checkout'}><button className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <BsBagCheckFill className="mt-1 mr-1" />Checkout</button></Link>
        <button onClick={clearCart} className="flex mx-2   text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <AiFillDelete className="mt-1.5 mr-1 " />Clear</button>
        </div>
    </div>
  </div>
</header>
  )
}

export default Navbar