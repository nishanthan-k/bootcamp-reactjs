import React, { useRef, useState } from "react";
import { nowShowing } from "./MovieListJson"
import "../css/MovieFiler.css";

const MovieFilter = () => {
  const [state, setState] = useState({
    isSelectLanguage: false,
    isSelectGenre: false,
    isSelectFormat: false,
    isSelectFilterCatrgory: false,
  });

  const movies = [];
  const filterCategoryList = ["Now Showing", "Coming Soon", "Exclisive"];
  const laguagesList = ["Tamil", "English", "Hindi"];
  const genreList = ["Action", "Comedy", "Horror", "Commercial", "Disney"];
  const formatList = ["2D", "3D"];

  const filterCategoryRef = useRef({
    "Now Showing": false,
    "Coming Soon": false,
    Exclusive: false
  })

  const languagesRef = useRef({
    Tamil: false,
    English: false,
    Hindi: false
  })

  const genreRef = useRef({
    Action: false,
    Comedy: false,
    Horror: false,
    Commercial: false,
    Disney: false,
  })

  const formatRef = useRef({
    "2D": false,
    "3D": false
  })

  const updateBool = (e) => {
    let clickedOption = e.target.id;
    // console.log(clickedOption)

    if (clickedOption === "selectLanguage") {
      setState({
        isSelectLanguage: !state.isSelectLanguage,
        isSelectGenre: state.isSelectGenre,
        isSelectFormat: state.isSelectFormat,
      });
    } else if (clickedOption === "selectGenre") {
      setState({
        isSelectGenre: !state.isSelectGenre,
        isSelectLanguage: state.isSelectLanguage,
        isSelectFormat: state.isSelectFormat,
      });
    } else if (clickedOption === "selectFormat") {
      setState({
        isSelectFormat: !state.isSelectFormat,
        isSelectLanguage: state.isSelectLanguage,
        isSelectGenre: state.isSelectGenre,
      });
      // console.log(state);
      // console.log(formatRef);
    }
  };


  const checkObj = {
    audio: [],
    genre: [],
    format: []
  }


  const handleFilterChange = (category, value) => {
    const ref = category === "Filter Category" ? filterCategoryRef.current : category === 'Languages' ? languagesRef.current : category === 'Genre' ? genreRef.current : category === 'Format' && formatRef.current

    ref[value] = !ref[value];

    if (category === 'Filter Category') {
      document.getElementById(value).style.textDecoration = "underlined";
      document.getElementById(value).style.color = "blue";

      ref[value] ? document.getElementById(value).style.color = "blue" : document.getElementById(value).style.color = "black";
    }


  
    Object.entries(languagesRef.current).map(aud => {
      if(aud[1] === true) {
        console.log(aud[0])
        nowShowing.map(movie => {
          // console.log(movie.language, aud[])
          if(movie.language === aud[0]) {
            movies.push(movie)
            console.log("same aud")
          }
        })
      }
    })
  
    console.log("movies", movies);
    FilterMoviesResult();
  }

  const FilterMoviesResult = () => {
    console.log("Result Area");
    return (
      <div className="MovieFilter-FilterResult">
        <p>Hello</p>
        {movies.map((movie, i) => ((
          <div key={`movieresult${i}`}>
            {console.log(movie.name)}
            <img src={movie.src} alt={movie.name}/>
          </div>
        )))}
      </div>
    )
  }


  return (
    <>
      <div className="MovieFilter">
        <div className="MovieFilter-header Prevent-text-Select">
          <div className="MovieFilter-show-time">ShowTime</div>

          <u className="MovieFilter-header-list">
            <li className="MovieFilter-nav-list-links">Term Insurance</li>
            <li className="MovieFilter-nav-list-links">Customer Service</li>
            <li className="MovieFilter-nav-list-links">About Us</li>
          </u>
        </div>

        <div className="MovieFilter-FilterCategory Prevent-text-Select">
          <ul className="FilteCategory-List">
            { filterCategoryList.map((filterCategory) => (
              <li key={ filterCategory } className="FilterCategory-ListItems" onClick={ () => handleFilterChange("Filter Category", filterCategory) }><p id={ filterCategory }>{ filterCategory }</p></li>
            )) }
          </ul>
        </div>

        <div className="MovieFilter-MoviesSection">
          <div className="MovieFilter-FilterOption Prevent-text-Select">
            <ul className="MovieFilter-FilterOptionList">
              <li className="MovieFilter-FilterOptionListItems">
                <p id="selectLanguage" onClick={ updateBool }>
                  Select Language
                </p>
                { state.isSelectLanguage && (
                  <div className="MovieFilter-FilterOptionList-LanguageOption">
                    { laguagesList.map((language) => (
                      <div key={ language } className="MovieFilter-FilterOptionList-Language MovieFilter-DropDownFilter">
                        <input
                          type="checkbox"
                          value={ language }
                          name={ language }
                          onChange={ () => handleFilterChange("Languages", language) }
                        />
                        <label htmlFor={ language }>{ language }</label>
                      </div>
                    )) }
                  </div>
                ) }
              </li>
              <li className="MovieFilter-FilterOptionListItems">
                <p id="selectGenre" onClick={ updateBool }>
                  Select Genre
                </p>
                { state.isSelectGenre && (
                  <div className="MovieFilter-FilterOptionList-GenreOption">
                    { genreList.map((genre) => (
                      <div key={ genre } className="MovieFilter-FilterOptionList-Genre MovieFilter-DropDownFilter">
                        <input
                          type="checkbox"
                          value={ genre }
                          name={ genre }
                          onChange={ () => handleFilterChange("Genre", genre) }
                        />
                        <label htmlFor={ genre }>{ genre }</label>
                      </div>
                    )) }
                  </div>
                ) }
              </li>
              <li className="MovieFilter-FilterOptionListItems">
                <p id="selectFormat" onClick={ updateBool }>
                  Select Format
                </p>
                {/* {console.log(state.isSelectFormat, 'selectFormat')} */ }
                { state.isSelectFormat && (
                  <div className="MovieFilter-FilterOptionList-FormatOption">
                    { formatList.map((format) => (
                      <div key={ format } className="MovieFilter-FilterOptionList-Format MovieFilter-DropDownFilter">
                        <input
                          type="checkbox"
                          value={ format }
                          name={ format }
                          onChange={ () => handleFilterChange("Format", format) }
                        />
                        <label htmlFor={ format }>{ format }</label>
                      </div>
                    )) }
                  </div>
                ) }
              </li>
            </ul>
          </div>
        </div>

        <div className="MovieFilter-FilterResult" >
          { FilterMoviesResult() }
        </div>
      </div>
    </>
  );
};

export default MovieFilter;


