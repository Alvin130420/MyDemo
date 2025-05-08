import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { Outlet } from 'react-router-dom'
 

function Navbar() {
  return (
    <>
      <div className='bg-white/70 fixed w-full backdrop-blur z-100'>
        <div className="flex justify-between items-center px-4 py-[12px] mx-auto container ">
          <Link to="/"><h1 className='text-2xl font-bold text-indigo-600'>Elite Edu Tech</h1></Link>
          <div className="md:flex items-center gap-[33px] font-medium hidden ">
            <Link to="/" className='text-indigo-600 hover:text-indigo-700 transition duration-200'>Home</Link>
            <Link to="/about" className='hover:text-indigo-600 transition duration-200'>About</Link>
            <Link to="/features" className='hover:text-indigo-600 transition duration-200'>Features</Link>
            <Link to="/pricing" className='hover:text-indigo-600 transition duration-200'>Pricing</Link>
            <Link to="/contact" className='hover:text-indigo-600 transition duration-200'>Contact</Link>
            <div className="">
              <Button text="Get Started" type="btn-primary"/>
            </div>
          </div>
          <div className='md:hidden flex'><i className="fa-solid fa-bars"></i></div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar
