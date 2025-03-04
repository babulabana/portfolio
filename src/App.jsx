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
import Git from './components/Git'
import "flowbite"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/project' element={<Project></Project>}></Route>
      <Route path='/resume' element={<Resume></Resume>}></Route>
      <Route path='/git' element={<Git></Git>}></Route>
     </Routes>
    {/* <Footer></Footer> */}
    </>
  )
}

export default App
