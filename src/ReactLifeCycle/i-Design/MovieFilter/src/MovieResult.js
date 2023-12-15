import React, { useEffect, useState } from 'react'
import "../css/movieResult.css"
import { nowShowing, comingSoon, exclusive } from './movieData';

const MovieResult = (props) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  useEffect(() => {
    let moviesToDisplay = [];

    props.category.map((categ) => {
      let temp = categ === "Now Showing" ? moviesToDisplay = [...nowShowing] : categ === "Coming Soon" ? moviesToDisplay.push(...comingSoon) : moviesToDisplay.push(...exclusive);
    })

    if (props.language.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) => props.language.includes(movie.language));
    }

    if (props.genre.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) => props.genre.includes(movie.genre));
    }

    if (props.format.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) => props.format.includes(movie.format));
    }

    setFilteredMovies(moviesToDisplay);
  }, [props.category, props.language, props.genre, props.format])

  filteredMovies.map((movie) => console.log(`${movie.name}, ${movie.language}`));
  console.log();

  return (
    <>
      <div className="MovieResult">
        {filteredMovies.map((movie, index) => (
          <img src={movie.src} key={index} id={index} width={250} ></img>
        ))}
      </div>
    </>
  )
}

export default MovieResult