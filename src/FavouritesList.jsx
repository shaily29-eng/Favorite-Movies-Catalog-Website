import FavouriteMovie from './FavouriteMovie'
function FavouritesList(props) {
    return (
        <div className="favourites-container">
            <h3>My favourite movies</h3>
            {props.favourites.length > 0 ? (

                <ul className='favuorites-list'>

                    {props.favourites.map(movie => (
                        <FavouriteMovie movie={movie}
                            removeFavourite={props.removeFavourite}
                            showModal={props.showModal}
                        />
                    ))}
                </ul>
            ) : (
                    <p>You have no favourite movies yet!</p>
                )
            }
        </div>
    )
}

export default FavouritesList