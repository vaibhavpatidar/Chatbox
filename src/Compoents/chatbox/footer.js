import InputEmoji from 'react-input-emoji'
import React from 'react';
import { IoPaperPlane } from "react-icons/io5"
import { FaPlus } from 'react-icons/fa'


function Footer({ inputValue }) {
  const [input, setInput] = React.useState('')
  const [file, setFile] = React.useState()

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      inputValue(input)
    }
  };

  function saveFile() {
    if (file != undefined) {
      var a = file.target.files[0].name
      localStorage.setItem('File', JSON.stringify(a));
      console.log(a)
    }
  }

  return (

    <div className="footer">
      <table style={{ "margin-right": "10px" }}>
        <tr>
          {/* value={text} onChange={setText} cleanOnEnter  onEnter={handleOnEnter} placeholder="Type a message" */}
          <th style={{ width: "8%", textAlign: "right", color: "gray" }}>
            <label><FaPlus /><input type="file" onChange={setFile} /> </label>
          </th>
          <th style={{ width: "80%" }}>
            <InputEmoji onChange={setInput} onKeyDown={onKeyDownHandler} value={input} placeholder="Type a message" className="input_box" />
          </th>
          <th style={{ width: "8%" }}>
            <button className='submitbutton' onClick={(event) => { inputValue(input); saveFile() }}><IoPaperPlane /></button>
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
