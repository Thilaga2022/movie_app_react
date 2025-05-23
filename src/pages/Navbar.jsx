import React, { useContext } from 'react'
import{Link} from 'react-router-dom'
import Home from './Home'
import WatchList from './WatchList'
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {
  // Use watchlist value from watchListContext
  const{watchlist}= useContext(WatchListContext)
  return (
    <nav className='text-white bg-gray-900 flex justify-between p-4 fixed w-full top-0 z-10'>
        {/* Link tags items are clickable. When cliked it navigates to the mentioned page */}
       <Link to='/' className='text-xl font-bold'>Movie App</Link>
       {/* whenever movie added to watch list, here count increases watchlist.length */}
       <Link to='/watchlist' className='text-xl'>WatchList ({watchlist.length})</Link>
    </nav>
  )
}

export default Navbar
