import logo from './logo.svg';
import home from './Component/pics/home.png'
import openbook from './Component/pics/openbook.png'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar';
import Maincontent from './Component/Maincontent';
import LogIn from './Component/LogIn';
import { AppContext } from "./Component/Contaxt";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AllBlog from './Component/AllBlog';


function App() {
  const [Auth, setAuth] = useState(false)
  const [FindByID, setFindByID] = useState(0)
  const [UserName, setUserName] = useState('')
  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_USER':
        setAuth(payload.userId)
        break;
      case 'GET_ID':
        // Handle removing user action if needed
        setFindByID(payload.userId)
        break;
      case 'USER_NAME':
        setUserName(payload.userId)
    }
  }
 
  
  console.log(Auth)
  return (
    <Router>
      <div style={{ height: '100vh' }}>
        <Header />
        <div style={{height:'100%',
         display: 'flex', flexDirection: 'row', overflow: 'hidden',  }}> {/* 'calc(100vh - headerHeight)'*/}
          <Sidebar />
          <div style={{flex:1, display: 'flex', flexDirection: 'column', backgroundColor: '#e5ecf3', borderTopLeftRadius: '20px',overflow:'scroll'}}> {/*replace flex 1 with minheight 100% */}
            <AppContext.Provider value={{ Auth, dispatchUserEvent,FindByID,UserName }}>
              {/* {Auth ? <Maincontent /> : <LogIn />} */}
              {/* <Maincontent/> */}
              {/* <LogIn/> */}
              {/* <AllBlog/> */}
              
              <Routes>
                <Route path="/Maincontent" element={<Maincontent />} />
                <Route path="/AllBlog" element={<AllBlog/>} />
                <Route path="/" element={<LogIn />} />
              </Routes>
            </AppContext.Provider>
          </div>
        </div>

      </div>
    </Router>
  );

}

export default App;
