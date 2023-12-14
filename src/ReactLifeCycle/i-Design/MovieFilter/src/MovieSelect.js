import React, { useState } from "react";
import { nowShowing, comingSoon, exclusive } from "./MovieListJson";
import "../css/MovieSelect.css";

const MovieSelect = (props) => {
  const [state, setState] = useState({
    isSelectLanguage: false,
    isSelectGenre: false,
    isSelectFormat: false,
    isSelectFilterCatrgory: false,
    changesMade: 0,
  });

  const [language, setLanguage] = useState({
    Tamil: false,
    English: false,
    Hindi: false,
  });

  const [genre, setGenre] = useState({
    Action: false,
    Comedy: false,
    Horror: false,
    Commercial: false,
    Disney: false,
  });

  const [formatState, setFormatt] = useState({
    TwoDmovieAudio: false,
    ThreeD: false,
  });

  const movies = [];
  const movieAvailCategory = [nowShowing, comingSoon, exclusive];
  // const filterCategoryList = ["Now Showing", "Coming Soon", "Exclusive"];
  const laguagesList = ["Tamil", "English", "Hindi"];
  const genreList = ["Action", "Comedy", "Horror", "Commercial", "Disney"];
  const formatList = ["2D", "3D"];

  const updateBool = (e) => {
    let clickedOption = e.target.id;

    if (clickedOption === "selectLanguage") {
      setState({
        isSelectLanguage: !state.isSelectLanguage,
        isSelectGenre: state.isSelectGenre,
        isSelectFormat: state.isSelectFormat,
        changesMade: state.changesMade + 1,
      });
    } else if (clickedOption === "selectGenre") {
      setState({
        isSelectGenre: !state.isSelectGenre,
        isSelectLanguage: state.isSelectLanguage,
        isSelectFormat: state.isSelectFormat,
        changesMade: state.changesMade + 1,
      });
    } else if (clickedOption === "selectFormat") {
      setState({
        isSelectFormat: !state.isSelectFormat,
        isSelectLanguage: state.isSelectLanguage,
        isSelectGenre: state.isSelectGenre,
        changesMade: state.changesMade + 1,
      });
    }
  };

  const RenderMovies = () => {
    Object.entries(props.category).map((ele, eleIndex) => {
      // console.log(ele)
      if (ele[1] === true) {
        movieAvailCategory[eleIndex].map((movie, movieIndex) => {
          // console.log(movie.name)
          let movieAudio = [];
          let movieGenre = [];
          let movieFormat = [];

          Object.entries(language).map((lang, langIndex) => {
            // console.log(lang)
            if (lang[1] === true) {
              movieAudio.push(lang[0]);
            }
          });
          Object.entries(genre).map((gen, genIndex) => {
            // console.log(gen);
            if (gen[1] === true) {
              movieGenre.push(gen[0]);
            }
          });
          Object.entries(formatState).map((format, formatIndex) => {
            if (format[1] === true) {
              movieFormat.push(format[0]);
              console.log(format[0])
            }
          });

          let tempMovieFormat = movie.format;

          if (movie.format === "2D") {
            tempMovieFormat = "TwoD";
          } else if (movie.format === "3D") {
            tempMovieFormat = "ThreeD";
          }


          if (movieAudio.indexOf(movie.language) >= 0 && movies.indexOf(movie) < 0) {
            movies.push(movie);
            console.log("tempMovieFormat", tempMovieFormat, movie.name)
            // console.log(movie.name)
          }

          if (movieGenre.indexOf(movie.genre) >= 0 && movies.indexOf(movie) < 0) {
            movies.push(movie);
          }
        });
      }
      console.log("movies", movies);
    });
    console.log("render movies.............");
    return (
      <div className="MovieFilter-FilterResult">
        {movies.map((movie, index) => (
          <div key={`movie${index}`} className="">
            <img src={movie.src} alt={movie.name} height="200" />
          </div>
        ))}
      </div>
    );
  };

  const handleFilterChange = (category, value) => {
    if (value === "Tamil") {
      setLanguage({
        Tamil: !language.Tamil,
        English: language.English,
        Hindi: language.Hindi,
      });
    } else if (value === "English") {
      setLanguage({
        Tamil: language.Tamil,
        English: !language.English,
        Hindi: language.Hindi,
      });
    } else if (value === "Hindi") {
      setLanguage({
        Tamil: language.Tamil,
        English: language.English,
        Hindi: !language.Hindi,
      });
    }

    if (value === "Action") {
      setGenre({
        Action: !genre.Action,
        Comedy: genre.Comedy,
        Horror: genre.Horror,
        Commercial: genre.Commercial,
        Disney: genre.Disney,
      });
    } else if (value === "Comedy") {
      setGenre({
        Action: genre.Action,
        Comedy: !genre.Comedy,
        Horror: genre.Horror,
        Commercial: genre.Commercial,
        Disney: genre.Disney,
      });
    } else if (value === "Horror") {
      setGenre({
        Action: genre.Action,
        Comedy: genre.Comedy,
        Horror: !genre.Horror,
        Commercial: genre.Commercial,
        Disney: genre.Disney,
      });
    } else if (value === "Commercial") {
      setGenre({
        Action: genre.Action,
        Comedy: genre.Comedy,
        Horror: !genre.Horror,
        Commercial: !genre.Commercial,
        Disney: genre.Disney,
      });
    } else if (value === "Disney") {
      setGenre({
        Action: genre.Action,
        Comedy: genre.Comedy,
        Horror: !genre.Horror,
        Commercial: genre.Commercial,
        Disney: !genre.Disney,
      });
    }

    if (value === "2D") {
      setFormatt({ TwoD: !formatState.TwoD });
    } else if (value === "3D") {
      setFormatt({ ThreeD: !formatState.ThreeD });
    }
  };
  // console.log(language, genre, formatState)

  return (
    <>
      <div className="MovieSelect">
        <div className="MovieFilter-FilterOption Prevent-text-Select">
          <ul className="MovieFilter-FilterOptionList">
            <li className="MovieFilter-FilterOptionListItems">
              <p id="selectLanguage" onClick={updateBool}>
                Select Language
              </p>
              {state.isSelectLanguage && (
                <div className="MovieFilter-FilterOptionList-LanguageOption">
                  {laguagesList.map((language) => (
                    <div
                      key={language}
                      className="MovieFilter-FilterOptionList-Language MovieFilter-DropDownFilter"
                    >
                      <input
                        type="checkbox"
                        value={language}
                        name={language}
                        onChange={() =>
                          handleFilterChange("Languages", language)
                        }
                      />
                      <label htmlFor={language}>{language}</label>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className="MovieFilter-FilterOptionListItems">
              <p id="selectGenre" onClick={updateBool}>
                Select Genre
              </p>
              {state.isSelectGenre && (
                <div className="MovieFilter-FilterOptionList-GenreOption">
                  {genreList.map((genre) => (
                    <div
                      key={genre}
                      className="MovieFilter-FilterOptionList-Genre MovieFilter-DropDownFilter"
                    >
                      <input
                        type="checkbox"
                        value={genre}
                        name={genre}
                        onChange={() => handleFilterChange("Genre", genre)}
                      />
                      <label htmlFor={genre}>{genre}</label>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className="MovieFilter-FilterOptionListItems">
              <p id="selectFormat" onClick={updateBool}>
                Select Format
              </p>
              {/* {console.log(state.isSelectFormat, 'selectFormat')} */}
              {state.isSelectFormat && (
                <div className="MovieFilter-FilterOptionList-FormatOption">
                  {formatList.map((format) => (
                    <div
                      key={format}
                      className="MovieFilter-FilterOptionList-Format MovieFilter-DropDownFilter"
                    >
                      <input
                        type="checkbox"
                        value={format}
                        name={format}
                        onChange={() => handleFilterChange("Format", format)}
                      />
                      <label htmlFor={format}>{format}</label>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="MovieFilter-FilterMovie">
          {state.changesMade === 0 ? (
            <div className="MovieFilter-FilterResult">
              {nowShowing.map((movie, index) => (
                <div key={`movie${index}`} className="">
                  <img src={movie.src} alt={movie.name} height="200" />
                </div>
              ))}
            </div>
          ) : (
            RenderMovies()
          )
          }
        </div>
      </div>
    </>
  );
};

export default MovieSelect;
