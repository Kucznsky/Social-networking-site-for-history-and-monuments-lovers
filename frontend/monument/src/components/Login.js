import React, {useState,useEffect, useContext} from 'react'
import AuthContext from '../contexts/AuthContext'
const Login = () => {

  let {loginUser} = useContext(AuthContext)

    return (
      <div className='center'>
        <div className='login'>
            <form onSubmit={loginUser}>
                <span className='center'><input className='login_input' type="text" name="username" placeholder="Enter Username" /></span>
                <span className='center'><input className='login_input' type="password" name="password" placeholder="Enter Password" /></span>
                <span className='center'><input type="submit" className='loginBtn'></input></span>
            </form>
        </div>
      </div>
    )
}

export default Login