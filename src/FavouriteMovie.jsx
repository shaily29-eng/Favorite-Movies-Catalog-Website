function FavouriteMovie({ movie, removeFavourite, showModal }) {
    const handlerRemove = (e) => {
        e.stopPropagation()
        removeFavourite(movie)
    }
    const handleShowModal = () => {
        showModal(movie)
    }
    return (
        <li className='favourite-movie' onClick={handleShowModal}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className='favourite-movie-info'>
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
            </div>
            <button className='remove-button' onClick={handlerRemove}>
                Remove Movie
            </button>
        </li>
    )
}
export default FavouriteMovie