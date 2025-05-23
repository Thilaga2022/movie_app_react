import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'

const Home = () => {
  // const movies = [{
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },
  // {
  //   poster: 'https://tse4.mm.bing.net/th?id=OIP.D9rh9CX_ulwATjEZFjj26QAAAA&pid=Api',
  //   title: 'The Gorge',
  //   release_date: '24-05-2024'
  // },


  // ]

   
  const [movies, setMovies] =useState([])
  // The above state is To handle fetching the movies from the database
  // To handle page number. Initially page numer will be 1
  const [page,setPage] = useState(1)

  // To hadnle search
  const [search, setSearch] =useState("")

  

  useEffect(()=>{
// initially this url will be passed when page loads
    let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=1aee8f3a68ec4856a7387570d6365348`
    // if user searches anything this url will be passed
    if (search){
      url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=1aee8f3a68ec4856a7387570d6365348`
    }
    fetch(url)
    .then((response) => response.json())
    
    .then((data) => setMovies(data.results));
    // whenever we click prev or next button we are updating page value, so whenever this page value updating this functioned will be triggered to get the movie details of the particular page number
  },[page,search])
  // Whenever we search also, this function should get triggered. Hence, we added search also after page
  return (
    <div>

      <input type="search" name="" id="" placeholder='Search movies....' onChange={(e)=>{setSearch(e.target.value)}} className='z-10 p-2 border fixed top-16 w-3/4 md:w-1/2 rounded text-white bg-gray-700 bg-opacity-60 backdrop-blur-md left-1/2 transform -translate-x-1/2' />
      <div className="movies-container grid md:grid-cols-3 lg:grid-cols-4 gap-1">
        {movies.map((movie) => {
          return (
            <Moviecard key={movie.id} movie={movie} />
          );
        })}

      </div>
      <div className="pagination-container w-full p-2 mt-4 fixed bottom-2 flex justify-between items-center">
        {/* Prev button is diabled at page 1*/}
        <button disabled={page==1} className='bg-gray-700 text-white p-2 rounded' onClick={()=>{setPage((page)=> page-1)}}>
          Previous
          </button>
        <button className='bg-gray-700 text-white p-2 rounded' onClick={()=>{setPage((page)=> page+1)}}>Next</button >
      </div>
    </div>
  )
}

export default Home
