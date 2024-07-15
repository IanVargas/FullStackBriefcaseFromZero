
import '../stylesheets/header.css';
import {HashLink as Link}  from 'react-router-hash-link'



function Header()
{
    return( 
        <>
        <div className='menu-box'>
            <div>    
            <Link to='/' className='menu-item' smooth> Home </Link>
            <Link to='#About' className='menu-item' smooth> About </Link>
            <Link to='#contactUs' className='menu-item' smooth> Contact-us </Link>
            </div>
            <div>
            <Link to='login.html' className='button menu-item' smooth> Login </Link>
            </div>
        </div>
        </>
        
    )
}

export  default Header;