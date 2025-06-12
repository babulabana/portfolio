import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Resume from './components/Resume'
// import Git from './components/Git'
import "flowbite"
import Contact from './components/Contact'
import Footers from './components/Footers'
import Starfield from "react-starfield";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-white'>
      
     <Navbar ></Navbar>
     <Starfield
     starCount={1000}
     starColor={[255,255,255]}
     speedFactor={0.05}
     backgroundColor='black'
     ></Starfield>

     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/project' element={<Project></Project>}></Route>
      <Route path='/resume' element={<Resume></Resume>}></Route>
      
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
     <Footers></Footers>
     </div>
    </>
  )
}

export default App
