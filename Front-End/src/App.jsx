import { AboutUs, FindUs, Footer, Header} from './container';
import {  Navbar, Login,Register } from './components';
import './App.css';
import React, {useState} from 'react';


export const App =()=> {
const [currentForm,setCurrentForm] = useState ("login")

const toggleForm = (formName)=>{
  setCurrentForm(formName)
}
return(
  <div className='App'>

    <Navbar />
    {
  currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
}
    <Header />
    <AboutUs />
    <FindUs />
    <Footer />
    
    
  </div>
)
};




