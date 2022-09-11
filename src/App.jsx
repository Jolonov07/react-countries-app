import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header  from './components/Header/index.jsx'
import Continent from './pages/Continent'
import Main from './pages/Main'
import CountryPage from './pages/Country'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/:continent' element={ <Continent /> } />
        <Route path='/:country' element={ <CountryPage /> } />
      </Routes>
    </div>
  )
}

export default App;
