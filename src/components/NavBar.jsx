import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from "phosphor-react"
export const NavBar = () => {
  return (
    <div className='flex flex-row justify-end bg-blue-400'>
        <Link className='m-5 font-custom' to="/"> Shop</Link>
        <Link className="m-5" to="/cart"> 
            <ShoppingCart size={32} />
        </Link>
    </div>       
  )
}
