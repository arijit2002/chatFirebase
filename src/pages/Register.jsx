import React from 'react'
import addAvatar from '../img/addAvatar.png'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

export const Register = () => {
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){

    };
    }

  return (
    <div className='formConatainer'>
        <div className="formWrapper">
            <span className='logo'>ChatApp</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
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
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}
