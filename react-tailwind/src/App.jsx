import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import HeroSection from './component/HeroSection'
import Cards from './component/Cards'
import Bose from './Bose'

function App() {
 

  return (
    <div>
  <Nav/>
  <br />
  <HeroSection/>
  <h1 className="text-3xl p-3">Top Categories Of The Month</h1>
  <hr />
  <Cards/>

  <Bose/>
       
    </div>
  )
}


export default App
