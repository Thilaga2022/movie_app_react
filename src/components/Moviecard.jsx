import React, { useContext } from 'react'
import {FaHeart ,FaRegHeart} from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'

const Moviecard = ({movie}) => {
console.log(movie)
// useContext React Hook allows you to access values from a Context.This hook looks up the nearest WatchListContext.Provider in the component tree and gives you the value passed to its value prop.
const {toggleWatchlist,watchlist}= useContext(WatchListContext)
    console.log("WatchList",watchlist);
    
    const inWatchList = watchlist.some(m => m.id == movie.id)
  return (
    <div className='bg-gray-800 rounded-lg p-4 text-white shadow-md relative m-2 top-36'>
      
      <img className='w-full h-80 object-contain rounded-sm' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`} alt={movie.title} />
      <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
      <p>{movie.release_date}</p>
      {/* if true solid heart else outline heart */}
      <button onClick={()=>toggleWatchlist(movie)} className='absolute top-5 right-5 text-lg'>{inWatchList ? <FaHeart color='tomato'/> : <FaRegHeart color='tomato'/>}</button>
    </div>
  )
}

export default Moviecard
