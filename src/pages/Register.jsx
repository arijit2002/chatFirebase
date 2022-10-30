import React from 'react'

export const Register = () => {
  return (
    <div className='formConatainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="file" />
                <button>Sign up</button>
            </form>
            <p>Don't have an account? Login</p>
        </div>
    </div>
  )
}
