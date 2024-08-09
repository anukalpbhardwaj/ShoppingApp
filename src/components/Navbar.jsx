import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const { cart } = useSelector((state) => state)

  return (
    <div>
      <nav className='h-20 max-w-6xl flex flex-col md:flex-row items-center mx-auto px-4 relative'>
        {/* Mobile Logo Section (small and at the start) */}
        <NavLink to="/" className='block md:hidden flex items-center absolute left-5'>
          <img 
            src="https://www.logolynx.com/images/logolynx/s_de/debc1d33347199bd36598257477cee0d.jpeg" 
            className='h-8' 
            alt="Company Logo"
          />
        </NavLink>

        {/* Mobile View: Show only Anukalp ki Dukan centered */}
        <div className='w-full flex justify-center items-center md:hidden mt-10'>
          <NavLink 
            to="/" 
            className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-poppins font-bold border-b-2 border-transparent hover:border-white hover:text-yellow-300 transition-colors whitespace-nowrap'>
            Anukalp ki Dukan
          </NavLink>
        </div>

        {/* Tablet and Desktop View */}
        <div className='hidden md:flex flex-1 items-center justify-between md:mx-8'>
          <NavLink to="/" className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white hover:text-yellow-300 transition-colors'>
            Home
          </NavLink>
          <NavLink 
            to="/" 
            className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-poppins font-bold border-b-2 border-transparent hover:border-white hover:text-yellow-300 transition-colors whitespace-nowrap'>
            Anukalp ki Dukan
          </NavLink>
          <NavLink to="/cart" className='flex items-center'>
            <div className='relative'>
              <FaShoppingCart className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-yellow-300 transition-colors' />
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

        {/* Cart Icon for Mobile View */}
        <NavLink to="/cart" className='flex items-center md:hidden absolute right-5 top-1/2 transform -translate-y-1/2'>
          <div className='relative'>
            <FaShoppingCart className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-yellow-300 transition-colors' />
            {cart.length > 0 && (
              <span 
                className='absolute -top-1 -right-2 bg-yellow-300 text-xs w-5 h-5 flex justify-center items-center rounded-full animate-bounce text-black'
              >
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </nav>
    </div>
  )
}
