import React, { useState } from 'react';
import {
  FaCog,
  FaHeadphonesAlt,
  FaMicrophone,
  FaMicrophoneSlash
} from 'react-icons/fa';

import './styles.css';

export default function Profile() {

  const [mic, setMic] = useState(true);

  return(
    <>
      <div id="my-profile">
        <div id="profile-content">
          <img
            class="profile-chat"
            src="https://avatars3.githubusercontent.com/u/38510607?s=460&v=4"
          />

          <div id="info-profile">
            <strong>HigorD</strong>
            <p>#0765</p>
          </div>
        </div>

        <div id="cfgs-content">
          <div className="cfgs-items" onClick={()=>{setMic(!mic)}} >
            {mic ? <FaMicrophone/> : <FaMicrophoneSlash/>}
            
          </div>

          <div className="cfgs-items">
            <FaHeadphonesAlt/>
          </div>

          <div className="cfgs-items">
            <FaCog/>
          </div>
        </div>
      </div>
    </>
  );
}