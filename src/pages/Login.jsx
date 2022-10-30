import React from 'react'
import addAvatar from '../img/addAvatar.png'

export const Login = () => {
  return (
    <div className='formConatainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
            <p>Don't have an account? Sign In</p>
        </div>
    </div>
  )
}
