import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-20 py-4'>
        <h1 className='text-2xl text-white'>Hello <br /> <span className='text-2xl  ml-5'>Dev🦁</span> </h1>
        <div>
        <button className='px-2 py-2 bg-red-600 rounded'>Log out</button>
        </div>
    </div>
  )
}

export default Header;