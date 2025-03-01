import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-green-800 text-white py-3'>
      <div className='logo'>
        <span className='font-bold text-xl mx-8 '>todo</span>
      </div>
        <ul className='flex gap-8'>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50'>Your tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar