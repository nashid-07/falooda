import { useState } from 'react'
import Header from './components/Header'
import Create from './pages/Create'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Update from './pages/Update'
import View from './pages/View'
import './bootstrap.min.css'
import './App.css'
import { Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App
