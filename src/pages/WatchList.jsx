import React, { useContext, useState } from 'react'
import Genre from '../components/Genre'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'

const WatchList = () => {
  // This line is to use watchlist value from watchlistcontext
  const{watchlist,genreList} = useContext(WatchListContext)

  // To handle user selected genre

  const[selectedGenre,setSelectedGenre] = useState("")

  // To handle search functionality 
  const[search,setSearch] = useState("")
  const filteredMovies = watchlist.filter((movie)=>
  movie.title.toLowerCase().includes(search.toLocaleLowerCase()))
  // from the fintered datas again applying filter to filter according to genre
  .filter((movie)=>{
    return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
  })
  return (
    <div>

      <input type="search" name="" id="" placeholder='Search movies....' onChange={(e)=>setSearch(e.target.value)} className='z-10 p-2 border fixed top-16 w-3/4 md:w-1/2 rounded text-white bg-gray-700 bg-opacity-60 backdrop-blur-md left-1/2 transform -translate-x-1/2' />
      <div className='mt-28 flex justify-center'>
        <Genre genreList={genreList} setSelectedGenre={setSelectedGenre}/>
      </div>
      <div className="movies-container grid md:grid-cols-3 lg:grid-cols-4 gap-1">
        {filteredMovies.map((movie) => {
          return (
            <Moviecard key={movie.id} movie={movie} />
          );
        })}

      </div>

    </div>
  )
}

export default WatchList
