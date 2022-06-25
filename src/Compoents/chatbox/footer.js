import InputEmoji from 'react-input-emoji'
import React from 'react';
import {IoPaperPlane} from "react-icons/io5" 
import { FaPlus }  from 'react-icons/fa'


function Footer({inputValue}) {
  const [input, setInput] = React.useState('')


    return (
      
      <div className="footer">
        <table  className=''>
          <tr>  
          {/* value={text} onChange={setText} cleanOnEnter  onEnter={handleOnEnter} placeholder="Type a message" */}
          <th style={{width: "8%"}}> 
          <FaPlus />
          </th>
          <th style={{width: "84%"}}>
            <InputEmoji onChange={setInput} placeholder="Type a message" />
          </th>
          <th style={{width: "8%"}}>
            <button onClick={(event) => {inputValue(input)}}><IoPaperPlane/></button>
          </th>
        </tr>
      </table>
          {/* <InputEmoji
          // value={text}
          // onChange={setText}
          // cleanOnEnter
          // onEnter={handleOnEnter}
          placeholder="Type a message"
        />
        */}
      </div>
    );
  }
  
  export default Footer;
  