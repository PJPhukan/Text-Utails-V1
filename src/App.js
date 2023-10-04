// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navber from './Componant/Navber';
import Textform from './Componant/Textform';
import About from './Componant/About';
import Alart from './Componant/Alart';
// import Home from './Componant/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [color, setcolor] = useState('dark')
  const [alart, setalart] = useState(null)
  const [textColor, settextColor] = useState('dark')
  const [BgColor, setBgColor] = useState('#ead6d6')

  const sowAlart = (massage, type) => {
    setalart({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setalart(null)
    }, 1500)

  }

  const toggleMode = (cls) => {
    removebodyclass()
    if (mode === 'dark') {
      setmode('light')
      setcolor('dark')
      settextColor('black')
      setBgColor('#ead6d6')
      sowAlart("Light mode enable", "success")
      document.body.style.backgroundColor = "white"
      document.body.classList.add('bg-'+cls )
    } else {
      setmode('dark')
      setcolor('light')
      settextColor('white')
      setBgColor('#869cc5')
      sowAlart("Dark mode enable", "success")
      document.body.style.backgroundColor = "#507dbf"
    }
  }

  const removebodyclass=()=>{
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')

  }



  // router 


  return (
    <>
      <Router>
      {/* <Navber tittle="PJPhukan" Home="Home Section"/> */}
      <Navber mode={mode} color={color} Home="Home" toggleMode={toggleMode} />
      <Alart alart={alart} />
      <div className="container my-5" >
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About  mode={mode}/>} />
            < Route path="/" element={<Textform heading="Enter your text for Analyze below" mode={mode} sowAlart={sowAlart} textColor={textColor} BgColor={BgColor} />} />
          </Routes>
      {/* <Textform heading="Enter your text for Analyze below" mode={mode} sowAlart={sowAlart} textColor={textColor} BgColor={BgColor} /> */}
      </div>
      </Router>
    </>

  );
}

export default App;
