import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Chat from './compoents/Chat'
import Sidebar from './compoents/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
     {/* Hello Whatsapp */}
<div className="app_body">
     <Sidebar/>
     <Chat/> 



</div>


    
    </div>
  )
}

export default App
