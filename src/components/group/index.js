import React from 'react';

import './styles.css';

export default function Groups(props) {

  return(
      
    <div className="group">
      <div className="mark-white"/>
      <img 
        className="logo"
        src={props.src}
      />
    </div>
  )
}