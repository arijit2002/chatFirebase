import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchFor">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src='https://images.pexels.com/photos/4883441/pexels-photo-4883441.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
