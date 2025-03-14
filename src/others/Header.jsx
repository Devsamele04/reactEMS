import React, { useState } from 'react'
import { setLocalStorage } from '../utils/LocalStorage'

const Header = (props) => {


const logoutUser =()=>{
localStorage.setItem('loggedInUser','')
props.changeUser('')
// window.location.reload()
// console.log(props.changeUser)
}

  return (
    <div className='flex items-center justify-between p-10'>
        <h1 className='text-2xl text-white'>Hello <br /> <span className='text-2xl  ml-5'>Dev🦁</span> </h1>
        <div>
        <button onClick={logoutUser} className='px-2 active:scale-95 py-2 bg-red-600 rounded-sm text-white'>Log out</button>
        </div>
    </div>
  )
}

export default Header;