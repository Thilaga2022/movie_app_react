import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import WatchList from './pages/WatchList'
import WatchListProvider from './context/WatchListContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WatchListProvider>
      <BrowserRouter>
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
    </div>
      
      
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
