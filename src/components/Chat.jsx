import React from 'react'
import {Messages} from './Messages'
import Cam from '../img/video-camera.png'
import Add from '../img/add-user.png'
import More from '../img/more.png'

export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt='Camera' />
          <img src={Add} alt='Add Friend' />
          <img src={More} alt='More' />
        </div>
      </div>
      <Messages />
    </div>
  )
}
