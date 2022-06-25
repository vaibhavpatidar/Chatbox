import React from 'react'
import Header from '../Compoents/chatbox/header.js'
import Chat from '../Compoents/chatbox/chat.js'
import Footer from '../Compoents/chatbox/footer.js'
import './index.css'

function Chatbox() {
  const [input, setInput] = React.useState([])

  const msg =(input) => {
    let data={text: input, isbot: 0}
    setInput(input => [...input, data])
  }
  return (
    
    <div className="App">
        <dix className="chatbox">
            <Header />
            <Chat list={input}
             />
            <Footer inputValue={(input)=> {msg(input)}} />
        </dix>
    </div>
  );
}

export default Chatbox;
