import React from 'react';

import './styles.css';

export default function Friends() {

  return(
    <>
      <div >
        <strong>Amigos</strong>
      </div>

      <div className="hr-vertical"/>

      <div className="top-bar-items">
        <p>Disponível</p>
      </div>

      <div className="top-bar-items">
        <p>Todos</p>
      </div>

      <div className="top-bar-items">
        <p>Pendente</p>
      </div>

      <div className="top-bar-items">
        <p>Bloqueado</p>
      </div>

      <div id="add-friend">
        <p>Adicionar amigo</p>
      </div>
    </>
  );
}