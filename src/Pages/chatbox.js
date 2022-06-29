import React from 'react'
import Header from '../Compoents/chatbox/header.js'
import Chat from '../Compoents/chatbox/chat.js'
import Footer from '../Compoents/chatbox/footer.js'
import './index.css'

function Chatbox() {
  const [input, setInput] = React.useState([])

  const msg =(text) => {
    let data={text: text, isbot: 0}
    if(text.length>0){
    setInput(input => [...input, data])}
  }
  return (
    
    <div className="App">
       
            <Header />
            <Chat list={input}
             />
            <Footer inputValue={(text)=> {msg(text)}} />
       
    </div>
  );
}

export default Chatbox;
