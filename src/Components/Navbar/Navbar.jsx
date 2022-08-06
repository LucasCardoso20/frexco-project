import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { BsFillCartFill } from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import { useCartContext } from '../../context/cart_context'

const Navbar = () => {
    const [toggleCart, setToggleCart] = useState(false)
    const { amount } = useCartContext()
    return (
        <header>
            <nav className='nav'>
                <ul className='container'>
                    <li>
                        <Link to={'/'}>
                            <img src={logo} />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/cart'}>
                            <BsFillCartFill />
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar