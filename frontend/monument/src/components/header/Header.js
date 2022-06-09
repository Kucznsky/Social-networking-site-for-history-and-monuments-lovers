import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <span className='center'><input className='search' type="text" name="search" id="search" placeholder="search"></input></span>
      <div>
        <span className='login_link'><Link to='/login'>Log in</Link></span>
        <span className='login_link'><Link to='/register'>Sign in</Link></span>
      </div>
    </div>
  )
}

export default Header