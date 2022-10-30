import React from 'react'
import addAvatar from '../img/addAvatar.png'

export const Register = () => {
  return (
    <div className='formConatainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor='file'>
                    <img src={addAvatar} alt='avatar' />
                    <span> Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Don't have an account? Login</p>
        </div>
    </div>
  )
}
