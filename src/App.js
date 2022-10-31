import React, { useState } from 'react';
import './App.css';
// import About  from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
// import { 
// BrowserRouter as
//  Router , Route, Routes ,
// } from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light');
  const togglemode=()=>{
    console.log("clicked!");
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey';
      document.body.style.color='grey';
      showalert("darkmode has been enabled","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert("darkmode has been disabled","warning")
    }}
    const [alert, setalert] = useState(null);
    const showalert=(message,type)=>{ setalert({
     msg : message,
     type : type,})
     setTimeout(() => {
      setalert(null);
      }, 1500);
    }
  
  return (<>
  
  {/* <Router> */}
  < NavBar title= 'TextUtils' About='About' mode={mode} togglemode={togglemode} />
  <Alert alert={alert}/>
  
  
  <div className="container my-3">
  <Textform heading ='Your Text Goes Here:' mode={mode} showalert={showalert}/>
  
  
  {/* <Routes>
          <Route  exact path='/about' element={ <About mode={mode}/>} />
          
          
          <Route exact path="/" element={<Textform heading ='Your Text Goes Here:' mode={mode} showalert={showalert}/>} />
          
         
          
         
  </Routes> */}
  </div>
  
  
  {/* </Router> */}
  
  </>
  );
}

export default App;
