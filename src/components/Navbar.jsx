import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatApp</span>
      <div className="user">
        <img src='https://images.pexels.com/photos/4883441/pexels-photo-4883441.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='profilePic' />
        <span>Arijit</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}
