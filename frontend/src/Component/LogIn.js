import React, { useState ,useContext, useEffect } from 'react'
import { AppContext } from './Contaxt'
import { Navigate, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
    const { dispatchUserEvent } = useContext(AppContext);
    const [Signoption, setSignoption] = useState(true)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const signIn = ()=>{
        setSignoption(true)
    }
    const signUp = ()=>{
        setSignoption(false)
    }
    const register = async () =>{
        let headersList = {
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "email": Email,
             "password":Password
           });
           
           let response = await fetch(`http://localhost:8000/auth/register`, { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
            
           let data = await response.json();
           alert(data.message)
           if(data.access===true){
            console.log(Email)
            
            setSignoption(true)
           }
    }
    const login = async () =>{

        let headersList = {
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
            "email": Email,
            "password":Password
           });
           let response = await fetch("http://localhost:8000/auth/login", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
           let data = await response.json();
           dispatchUserEvent('ADD_USER', { userId: data.access });
         if(data.access === true){
           dispatchUserEvent('USER_NAME', { userId: Email });
           navigate("/AllBlog")
         }
           console.log(data);
    }

    
    
  return (
    <div style={{flex:1,display:'flex',width:'100%',height:'100vh',alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
          
          <div style={{width:'40%',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <button style={{border:'none',backgroundColor:Signoption ? '#6947bf' : 'grey',color:'white',width:'100px',height:'30px',fontSize:'large',borderRadius:'10px'}} onClick={signIn} type='button'>LogIn</button>
            <button style={{border:'none',backgroundColor:Signoption == false ? '#6947bf' : 'grey',color:'white',width:'100px',height:'30px',fontSize:'large',borderRadius:'10px'}} onClick={signUp} type='button'>SignUp</button>
          </div>

         {Signoption === true ? (<div>
          <div style={{display:'flex',flexDirection:'column',}}>
            <h3>UserName</h3>
            <input style={{borderRadius:'5px',width:'200px',height:'20px'}} type='text' placeholder='UserName' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div style={{display:'flex',flexDirection:'column',}}>
            <h3>Password</h3>
            <input style={{borderRadius:'5px',width:'200px',height:'20px'}} type='text' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div style={{display:'flex',flexDirection:'column',}}>
            <div style={{width:'30px',height:'10px'}}></div>
            <button type='button' style={{borderRadius:'5px',width:'200px',height:'20px',border:'none',color:'white',backgroundColor:'#6947bf',}} onClick={login}>SUBMIT</button>
          </div>
          </div>):(
            <div>
            <div style={{display:'flex',flexDirection:'column',}}>
            <h3>FullName</h3>
            <input style={{borderRadius:'5px',width:'200px',height:'20px'}} type='text' placeholder='FullName' />
          </div>
            <div style={{display:'flex',flexDirection:'column',}} onChange={(e)=>setEmail(e.target.value)}>
            <h3>UserName</h3>
            <input style={{borderRadius:'5px',width:'200px',height:'20px'}} type='text' placeholder='UserName' />
          </div>
          <div style={{display:'flex',flexDirection:'column',}}>
            <h3>Password</h3>
            <input style={{borderRadius:'5px',width:'200px',height:'20px'}} type='text' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div style={{display:'flex',flexDirection:'column',}}>
            <div style={{width:'30px',height:'10px'}}></div>
            <button type='button' style={{borderRadius:'5px',width:'200px',height:'20px',border:'none',color:'white',backgroundColor:'#6947bf',}} onClick={register}>SUBMIT</button>
          </div>
          </div>)}
        </div>
  )
}

export default LogIn
