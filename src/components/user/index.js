import React from 'react';

import './styles.css';

export default function User(props) {

  return (
    <div className="user">
      <img class="profile-chat" src={props.profile}/>
      {props.name}
    </div>
  )
}