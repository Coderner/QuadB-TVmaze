import React from 'react'
import Logo from "../images/logo2.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-screen bg-black py-8 px-8 sm:px-20'>
      <Link to="/">
        <img src={Logo} alt="logo" className='w-52 xl:w-64 h-14 xl:h-20'/>
      </Link>
    </div>
  )
}

export default Header