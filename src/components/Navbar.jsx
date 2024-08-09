import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const { cart } = useSelector((state) => state)

  return (
    <div>
      <nav className='h-20 max-w-6xl flex justify-between items-center mx-auto px-4'>
        <NavLink to="/">
          <div className='ml-5'>
            <img 
              src="https://www.logolynx.com/images/logolynx/s_de/debc1d33347199bd36598257477cee0d.jpeg" 
              className='lg:h-14 md:h-10 h-8' 
              alt="Company Logo"
            />
          </div>
        </NavLink>
        <div className='flex flex-1 items-center justify-between mx-8'>
          <NavLink to="/" className='text-white hover:text-yellow-300 transition-colors text-lg font-medium'>
            Home
          </NavLink>
          <NavLink to="/" className='text-white text-2xl font-bold border-b-2 border-white hover:border-yellow-300 transition-colors'>
            Anukalp ki Dukan
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl text-white hover:text-yellow-300 transition-colors' />
              {cart.length > 0 && (
                <span 
                  className='absolute -top-1 -right-2 bg-yellow-300 text-xs w-5 h-5 flex justify-center items-center rounded-full animate-bounce text-black'
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
