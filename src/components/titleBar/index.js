import React from 'react';

import './styles.css';

export default function TitleBar() {

  return(
    <div id="menu-bar">
      <div id="title-content">
        <p>DISCORD</p>

      </div>
      
      <div id="window-navs">
        <div id="minimize-button" className="navs" onClick={()=>{ }}>
          <div id="icon-minimize"/>
        </div>

        <div id="maximize-button" className="navs" onClick={()=>{ }}>
          <div id="icon-maxmize"/>
        </div>

        <div id="close-button" className="navs" onClick={()=>{ }}>
          <div id="icon-close1" className="icon-close" />
          <div id="icon-close2" className="icon-close" />
        </div>
      </div>
    </div>
  )
}
