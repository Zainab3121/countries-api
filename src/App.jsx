import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../src/components/navBar/NavBar'
import Home from './pages/home/Home'
import CountryDetails from './pages/countryDetails/CountryDetails'
import { useState } from 'react'



function App() {
  const [mode, setMode] = useState("homeLightMode")

  function changemode(){

    if(mode === 'homeDarkMode'){
      setMode('homeLightMode')
    }else{
      setMode('homeDarkMode')
    }
    return mode
  }
  
  return (
    <BrowserRouter>
      <div className={mode}>
        <NavBar changemode={changemode} mode={mode}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countryDetail/:name' element={<CountryDetails />} />
      </Routes>
      </div>     
    </BrowserRouter>
  )
}

export default App
