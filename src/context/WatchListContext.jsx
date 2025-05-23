import { Children, createContext, useState,useEffect } from "react";

// This creates a new context and Initially, its value is undefined until it's wrapped in a Provider.

export const WatchListContext = createContext()

const WatchListProvider = ({ children }) => {
  // To handle movies added to watchlist. Initally empty when no movies got added
  const [watchlist, setWatchlist] = useState([])
  // To handle genre (to access this globally, we are defining this here.)

  // This part is to initially get all movie list based on genre
  const [genreList,setGenreList] = useState([])

  

  useEffect(()=>{
  // initially this url will be passed which feches list of movies based on genre when page loads 
      let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=1aee8f3a68ec4856a7387570d6365348`
      
      
      fetch(url)
      .then((response) => response.json())
      
      .then((data) => setGenreList(data.genres || []));
      // Go to console-network-choose fetch/HXR - click the list?spi_key - check preview - We can see all genre's id and name details there.The data fetching from API will be genres category, if no data then empty array
    },[])

  const toggleWatchlist = (movie) => {
    // finding index of movie to be added/removed to the watchlist

    // If the movie is not found, index will be -1.

    // If the movie is found, index will be the position of that movie in the array.

    const index = watchlist.findIndex((m) => m.id === movie.id);
    // Add movie
    if (index === -1) {
      setWatchlist([...watchlist, movie])
    }
    // Remove movie
    else {
      setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)])
    }
  }
console.log("WatchList",watchlist);

  return (
    <WatchListContext.Provider value={{ watchlist, toggleWatchlist,genreList }}>

      {children}
    </WatchListContext.Provider>
  )

  {/* {children} allows nested components to be rendered inside the provider.

    const Greeting = ({ children }) => {
  return (
    <div>
      <h2>This is the Greeting component</h2>
      {children}
    </div>
  );
};
<Greeting>
  <p>Hello, welcome to the app!</p>
</Greeting>

Output:
html
Copy
Edit
<div>
  <h2>This is the Greeting component</h2>
  <p>Hello, welcome to the app!</p>
</div>*/}


}

export default WatchListProvider
