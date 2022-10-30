import React from 'react'

export const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/4883441/pexels-photo-4883441.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='profilePic'/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src='https://images.pexels.com/photos/4883441/pexels-photo-4883441.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' /> */}
      </div>
    </div>
  )
}
