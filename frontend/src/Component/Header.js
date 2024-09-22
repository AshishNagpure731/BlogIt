import React from 'react'
import './Header.css'
const Header = () => {
  return (
      <div className="container">
        <div className="header">
          <h1 className="heading">ZUAi</h1>
          <div className="buttonContainer">
            {/* <h3 className="loginButton">LogIn</h3> */}
            <button className="loginButton" type='button'>LogIn</button>
            {/* <h3 className="joinButton">Join Now</h3> */}
            <button className="joinButton" type='button'>Join Now</button>

          </div>
        </div>
      </div>
  )
}

export default Header

{/* <div style={{marginLeft:'30px',marginRight:'30px'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <h1 style={{color:''}}>ZUAi</h1>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'200px',alignItems:'center'}}>
        <h3 style={{fontSize:'14px' ,color:'grey',border:'1px solid black',height:'25px',width:'60px',textAlign:'center',borderRadius:'10px',alignContent:'center'}} >LogIn</h3>
        <h3 style={{fontSize:'15px' ,color:'white',height:'25px',width:'100px',backgroundColor:"#6947bf",textAlign:'center',borderRadius:'15px',alignContent:'center'}}>Join Now</h3>
        </div>
      </div>
      </div> */}