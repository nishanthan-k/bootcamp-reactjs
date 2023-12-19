import React, { useEffect, useState } from 'react'
import "../css/movieResult.css"
import { nowShowing, comingSoon, exclusive } from './movieData';

const MovieResult = (props) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let moviesToDisplay = [];

    if (props.category.length !== 0) {
      props.category.map((categ) => {
        let temp = categ === "Now Showing" ? moviesToDisplay = [...nowShowing] : categ === "Coming Soon" ? moviesToDisplay.push(...comingSoon) : moviesToDisplay.push(...exclusive);
      })
    } else {
      moviesToDisplay = [...nowShowing];
    }

    if (props.language.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) => props.language.includes(movie.language));
    }

    if (props.genre.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) => props.genre.includes(movie.genre));
    }

    if (props.format.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) => props.format.includes(movie.format));
    }


    if (props.searchMovie !== "") {
      console.log(props.searchMovie)
      moviesToDisplay = moviesToDisplay.filter((movie) => (movie.name.toLowerCase()).indexOf(props.searchMovie.toLowerCase()) === 0)
    }

    setFilteredMovies(moviesToDisplay);
  }, [props.category, props.language, props.genre, props.format, props.searchMovie])

  return (
    <>
      <div className="MovieResult">
        {filteredMovies.map((movie, index) => (
          <img src={movie.src} key={index} id={index} className='MovieImg' width={200} ></img>
        ))}
      </div>
    </>
  )
}

export default MovieResult