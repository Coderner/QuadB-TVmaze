import React from 'react'
import Logo from "../images/logo2.png"

const Header = () => {
  return (
    <div className='w-screen bg-black py-8 px-20'>
        <img src={Logo} alt="logo" className='w-52 xl:w-64 h-14 xl:h-20'/>
    </div>
  )
}

export default Header