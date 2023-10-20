import './App.css';
import './styles.css'
import SearchMovies from './SearchMovies'
import { useState } from 'react';
import FavouritesList from './FavouritesList'
import MovieModal from './MovieModal'

function App() {
  const [favourites, setFavourites] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)


  const addFavorite = (movie) => {
    setFavourites([...favourites, movie])
  }

  const removeFavourite = (movie) => {
    setFavourites(favourites.filter(f => f.imdbID !== movie.imdbID))
  }

  const showModal = (movie) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedMovie(null)
    setIsModalOpen(false)
  }


  console.log(favourites)
  return (
    <div className="App">
      <SearchMovies addFavorite={addFavorite} />
      <FavouritesList favourites={favourites}
        removeFavourite={removeFavourite}
        showModal={showModal} />
      {selectedMovie && (
        <MovieModal isModalOpen={isModalOpen}
          closeModal={closeModal}
          movie={selectedMovie} />
      )}
    </div>
  );
}

export default App;
