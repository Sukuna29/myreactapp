import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Student from './Students/Student';
import BoxColor from './Students/BoxColor';
import Hideen from './Students/Hideen';
import FindColor from './Students/FindColor';
import Formbtn from './Students/Formbtn';
import Header from './Students/Header';
function App() {
  const[number, setNewNumber]=useState(0);
  const clickhundler=() =>
    {
      console.log("clicked")
      setNewNumber(number+1);
      
    }
const clickhundl=() =>
{
  setNewNumber(number-1);
}
  return (
    
 <>
 <Formbtn/>
 <h1 style={{color:"red"}}>
 {number}
 </h1>
 <button onClick={clickhundler}>Click me for increage</button>
 <button onClick={clickhundl}>Click me for decriment</button>

 <Student mobilenumber={9053447030}/>
 <BoxColor/>
 <Hideen/>
 <FindColor/>
 <Header/>
 <button type="button" class="btn btn-primary">hello</button>
 </>
  );
}

export default App;
