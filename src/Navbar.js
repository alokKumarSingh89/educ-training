import React from 'react'

export const Navbar = () => {
  return (
    <nav className='px-4 py-4 bg-purple-900 text-white'>
        <ul className='flex'>
            <li className='mx-2 cursor-pointer fle'>Home</li>
            <li className='mx-2 cursor-pointer'>About</li>
            <li className='mx-2 cursor-pointer'>Contact</li>
        </ul>
    </nav>
  )
}
