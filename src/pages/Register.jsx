import React from 'react'
import addAvatar from '../img/addAvatar.png'

import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

import { useState } from 'react';

export const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            console.log('File available at', downloadURL);
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db,"users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db,"userChats", res.user.uid),{});
          });
        }
      );
    }catch(err){
      setErr(true);
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
                {err && <span>Something went wrong</span>}
            </form>
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}
