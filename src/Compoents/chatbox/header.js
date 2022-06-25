import React from 'react'
import '../../Pages/index.css';
import {FaArrowLeft, FaPhoneAlt}  from 'react-icons/fa'
import profilePic from '../../Pages/VaibhavProfilePhoto.jpg'

function header() {
    return (
    <div className='content'>
      <table  className='header'>
        <tr>
          <th style={{width: "10%"}}><FaArrowLeft /></th>
          <th style={{width: "10%"}}><img className='profile' src={profilePic} alt="BigCo Inc. logo"/></th>
          <th style={{width: "65%"}}><p className='name'>Vaibhav</p></th>
          <th style={{width: "15%"}}><FaPhoneAlt /></th>
        </tr>
      </table>
    </div>
    );
  }
  
  export default header; 