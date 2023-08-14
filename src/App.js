import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Main from './Components/Main';
import Footer from './Components/Footer';

const App=()=>{
  return(
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;
