import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

import Users from './components/user';
import BarGroups from './BarGroups';
import Profile from './components/profile';
import TitleBar from './components/titleBar';
import Friends from './components/topBar/Friends'

function App() {
  const users = [
    {
      name: "Higor Denomar",
      profile: "https://avatars3.githubusercontent.com/u/38510607?s=460&v=4"
    },
    {
      name: "Lorrane Alkimim",
      profile: "https://avatars2.githubusercontent.com/u/48871416?s=460&v=4"
    },
    {
      name: "Kaio Fábio",
      profile: "https://avatars1.githubusercontent.com/u/36752711?s=460&v=4"
    },
    {
      name: "Tony A",
      profile: "https://avatars1.githubusercontent.com/u/43297863?s=460&v=4"
    }
  ]

  const [title, setTitle] = useState(true);

  return (
    <>
    <TitleBar/>
    <div id="app">
      
      <BarGroups/>

      <aside id="side-bar">

        <div id="top-bar-peoples">
          <div id="search">
            <p>Encontre ou começe uma conversa</p>
          </div>
        </div>

        <hr/>

        <div id="people-conteiner">

          
          <div className="items" onClick={()=>{setTitle(true)}}>
            Amigos
          </div>

          <div className="items" onClick={()=>{setTitle(false)}}>
            Nitro
          </div>

          <div id="direct-msg">
            MENSAGENS DIRETAS
          </div>

          {users.map(a => {
            return (
              <Users name={a.name} profile={a.profile} />
            )
          })}


          
        </div>

        <Profile/>

      </aside>

      <main id="main">
        <div id="top-bar-content">
          {title ? <Friends/> : <div><strong>Nitro</strong></div>}
        </div>

        <hr/>

        <div id="content">

        </div>
        
      </main>
    </div>
    </>
  );
}

export default App;
