import React from 'react'
import "./SidebarChat.css"
import { Avatar,IconButton } from '@mui/material';

const SidebarChat = () => {
  return (
    <div className='SidebarChat'>
<Avatar src = "https://lh3.googleusercontent.com/ogw/AOh-ky3JehtaUdnryLVj5oSK2P3zj0ZhrEYGI9M2uhn_=s32-c-mo"  />
    <div className="sidebar_info">
<h2>
    Room Name
</h2>
<p>
    This is the Last Message
</p>
    </div>
    </div>
  )
}

export default SidebarChat
