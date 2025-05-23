import React, { useContext } from 'react'

const Genre = ({genreList,setSelectedGenre}) => {
  
  return (
    <select onChange={(e)=> setSelectedGenre(e.target.value)} className='p-2 bg-gray-900 opacity-60 backdrop-blur-md text-white border rounded'>
      <option value="">All Genres</option>
        {genreList.map(genre =>{
          return(
            <option key={genre} value={genre.id}>{genre.name}</option>
          )
        })}
    </select>
  )
}

export default Genre
