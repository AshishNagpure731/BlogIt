// src/components/Sidebar.js
import React from 'react';
import home from './pics/home.png';
import openbook from './pics/openbook.png';
import user from './pics/user.png';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => (
  <div className="sidebar">
    <div className="icon-container">
      <div className="spacer"></div>
      <img
        className="icon1"
        src={home}
        alt="Home"
      />
      <div className="spacer"></div>
      <img
        className="icon2"
        src={openbook}
        alt="Open Book"
      />
      <div className="spacer"></div>
    </div>
    <div className="icon-container">
      <img
        className="icon3"
        src={user}
        alt="User"
      />
    </div>
  </div>
);

export default Sidebar;


{/* import React from 'react'
import home from './pics/home.png'
import openbook from './pics/openbook.png'
import user from './pics/user.png'

const Sidebar = () => {
  return (

      <div style={{height:'100%',display:'flex',flexDirection:'column',overflowY:'auto',border:'2px solid red',width:'50px',justifyContent:'space-between',alignItems:'center' }}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',border:'2px solid red'}}>
            <div style={{height:'12px'}}></div>
            <img style={{height:'30px',width:'30px',backgroundColor:'#6947bf',borderRadius:'5px'}} src={home} alt='Home'/>
            <div style={{height:'12px'}}></div>
            <img style={{height:'30px',width:'30px',borderRadius:'5px'}} src={openbook} alt='openbook'/>
            <div style={{height:'12px'}}></div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',border:'2px solid red'}}>
            <img style={{height:'30px',width:'30px',borderRadius:'5px'}} src={user} alt='user'/>
        </div>
      </div>
  )
}

export default Sidebar */}