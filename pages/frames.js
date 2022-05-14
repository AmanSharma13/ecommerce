/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Frames = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <Link href={'/product/premium-frames'}>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="m-3 p-3 w-full h-full block" src="https://m.media-amazon.com/images/I/710xyQNrm5L._AC_UL320_.jpg" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FRAMES</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Frame Premium</h2>
            <p className="mt-1">₹1600</p>
          </div>
        </div>
        </Link>

       

      </div>
    </div>
  </section></div>
  )
}

export default Frames