import React from 'react'
import "./sidebar.css"
// import ChatIcon from '@mui/icons-material/Chat';
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from  '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
  return (
    <div className='sidebar'>
   

      <div className="sidebar_header">
<Avatar src = "https://lh3.googleusercontent.com/ogw/AOh-ky3JehtaUdnryLVj5oSK2P3zj0ZhrEYGI9M2uhn_=s32-c-mo"  />

        <div className="sidebar_headerRight">
             <IconButton>
            <DonutLargeIcon/>
            </IconButton>
            <IconButton>

<ChatIcon/>
</IconButton>

<IconButton>
<MoreVertIcon/>
</IconButton>


        </div>
      </div>


      <div className="sidebar_search">
       <div className="searchContainer">
        <SearchOutlined/>

        <input type="text" placeholder='Search or start new chat ' />
       </div>
      </div>


      <div className="chatsection">
<SidebarChat/>
<SidebarChat/>
<SidebarChat/>


      </div>
    </div>
  )
}

export default Sidebar
