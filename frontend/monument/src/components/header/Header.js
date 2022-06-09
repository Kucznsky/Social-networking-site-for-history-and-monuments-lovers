import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <span className='center'><input className='search' type="text" name="search" id="search" placeholder="search"></input></span>
      <span className='login_link'><Link to='/login'>Log in</Link></span>
    </div>
  )
}

export default Header