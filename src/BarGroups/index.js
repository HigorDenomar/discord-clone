import React from 'react';
import {
  FaSearch,
  FaPlus
} from 'react-icons/fa';

import './styles.css';
import Group from '../components/group';

export default function BarGroups() {
  
  const groups = [
    {src: "https://wallpaperboat.com/wp-content/uploads/2019/09/Demon-Slayer-Kimetsu-no-Yaiba4.jpg"},

    {src: "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/e/e3/Lemillion_bless%C3%A9.png/revision/latest?cb=20200102210233&path-prefix=fr"},
    
    {src: "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"},

    {src: "https://cdn.wallpapersafari.com/23/35/njTvXo.jpg"}
  ]

  return(
    <div id="bar-groups">
      <div id="group">
        <img
          id="logo"
          src="https://s2.glbimg.com/sXsPFRk4Vmct2ALKnCa1t_YePqg=/0x0:1514x917/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/h/w/Abq4oBSySsO0xmGnkDlg/discord.jpg"
        />
        <div id="mark-white"/>
      </div>

      {groups.map(a => {
        return(
          <Group src={a.src}/>
        )
      })}
      


      <div className="group-fix">
        <div className="mark-white-fix"/>
        <FaPlus color="#44b680"/>
      </div>

      <div className="group-fix">
        <div className="mark-white-fix"/>
        <FaSearch color="#44b680"/>
      </div>
      
    </div>
  )
}