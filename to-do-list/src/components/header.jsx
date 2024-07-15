import React from 'react';
import '../stylesheets/header.css';
//import {HashLink as Link}  from 'react-Linkr-hash-Link'
import { Link } from "react-router-dom";




function Header()
{
    return( 
        <>
        <div className='menu-box'>
            <div>    
            <Link  to='/' className='menu-item'> Home </Link>
            <Link  to='#About' className='menu-item' smooth > About </Link>
            <Link to='#Contact-us' className='menu-item' smooth> Contact-us </Link>
            </div>
            <div>
            <Link to='/Login' className='button menu-item' smooth> Login </Link>
            </div>
        </div>
        </>
        
    )
}

export  default Header;