import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [text, setText] = useState([]);
  const [option, setOption] = useState(-1);
  const [showData, setShowData] = useState("navbarData");

  const toggleData = () =>{
    showData === "navbarData" ? setShowData("navbarData activeData") : setShowData("navbarData")
  }


  return (
   <div>
    <Navbar showData={showData}/>
    <Header text={text} setText={setText} option={option} setOption={setOption}/>
    <Footer setText={setText} setOption={setOption} toggleData={toggleData}/>
   </div>
  )
}

export default App
