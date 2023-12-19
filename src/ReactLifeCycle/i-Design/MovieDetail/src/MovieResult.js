import React, { useEffect, useState } from "react";
import "../css/movieResult.css";
import MovieDetail from "./MovieDetail";
import { comingSoon, exclusive, nowShowing } from "./movieData";

const MovieResult = (props) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [clickedMovie, setClickedMovie] = useState();

  useEffect(() => {
    let moviesToDisplay = [];

    if (props.category.length !== 0) {
      props.category.map((categ) => {
        let temp =
          categ === "Now Showing"
            ? (moviesToDisplay = [...nowShowing])
            : categ === "Coming Soon"
            ? moviesToDisplay.push(...comingSoon)
            : moviesToDisplay.push(...exclusive);
      });
    } else {
      moviesToDisplay = [...nowShowing];
    }

    if (props.language.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) =>
        props.language.includes(movie.language)
      );
    }

    if (props.genre.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) =>
        props.genre.includes(movie.genre)
      );
    }

    if (props.format.length !== 0) {
      moviesToDisplay = moviesToDisplay.filter((movie) =>
        props.format.includes(movie.format)
      );
    }

    if (props.searchMovie !== "") {
      console.log(props.searchMovie);
      moviesToDisplay = moviesToDisplay.filter(
        (movie) =>
          movie.name.toLowerCase().indexOf(props.searchMovie.toLowerCase()) ===
          0
      );
    }

    setFilteredMovies(moviesToDisplay);
  }, [
    props.category,
    props.language,
    props.genre,
    props.format,
    props.searchMovie,
  ]);

  const handleImage = (movie) => {
    setShowMovieDetail(!showMovieDetail);
  };

  return (
    <>
      <div>
        {showMovieDetail === false && (
          <div className="MovieDetail-MovieResult">
            {filteredMovies.map((movie, index) => (
              <img
                src={movie.src}
                alt={movie.name}
                key={index}
                id={index}
                onClick={() => {
                  handleImage(movie);
                  setClickedMovie(movie);
                }}
                className="MovieImg"
                width={200}
              ></img>
            ))}
          </div>
        )}

        {showMovieDetail === true && <MovieDetail movie={clickedMovie} showMovieDetail={showMovieDetail} />}
      </div>
    </>
  );
};

export default MovieResult;
