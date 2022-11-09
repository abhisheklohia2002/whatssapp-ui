import React from 'react'
import "./chat.css"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Avatar,IconButton } from '@mui/material';
// import {AttachFile,MoreVert,SearchOutlined} from "@mui/icons-material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { useState } from 'react';
const Chat = () => {
  const [input,setInput] = useState('');

  const sendMessage = () => {

  }
  return (
    <div className='chat' >
<div className="chat_header">
  {/* Avatar */}
<Avatar src = "https://lh3.googleusercontent.com/ogw/AOh-ky3JehtaUdnryLVj5oSK2P3zj0ZhrEYGI9M2uhn_=s32-c-mo"  />

  <div className="chat_headerInfo">
    <h3>
    
      Room Name
    </h3>
    <p>
     
      Last seen at ...
    </p>
  </div>

  <div className="chat_headerRight">
    {/* icon  */}
    <IconButton>
           <SearchIcon/>
            </IconButton>


            <IconButton>
              <AttachFileIcon/>
            </IconButton>


            <IconButton>
              <MoreVertIcon/>
            </IconButton>
  </div>
</div>



<div className="chat_body">
  <p className='chat_message'>
<span className="chat_name">
  Musk 
</span>

    this is Message

    <span className="chat_timestamp">
      {/* {
        new Date(message.timestamp ?.toDate()) .toUTCString()
      } */}

      {
       new Date().toUTCString()
      }
    </span>
  </p>



  <p className='chat_message'>
<span className="chat_name">
  Musk 
</span>

    this is Message

    <span className="chat_timestamp">
      {/* {
        new Date(message.timestamp ?.toDate()) .toUTCString()
      } */}

      {
       new Date().toUTCString()
      }
    </span>
  </p>
  
  
  <p className='chat_message chat_receiver'>
<span className="chat_name">
  Musk 
</span>

    this is Message

    <span className="chat_timestamp">
      {/* {
        new Date(message.timestamp ?.toDate()) .toUTCString()
      } */}

      {
       new Date().toUTCString()
      }
    </span>
  </p>

</div>


<div className="chat_footer">
  <IconButton>
<InsertEmoticonIcon/>

    </IconButton>

<form action="
">
<input type="text" value  = {input}
onChange = {(e)=>setInput(e.target.value)}
placeholder="Type a Message"/>

<button type = "submit" onClick={sendMessage}>Send a messgae </button>
</form>
<IconButton>
<MicIcon/>

</IconButton>
</div>
    </div>
  )
}

export default Chat
