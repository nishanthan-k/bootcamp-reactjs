import React, { useState } from "react";
import "../css/MovieDetailFilter.css"
import MovieResult from "./MovieResult"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const MovieFilter = () => {
  const [selectLanguage, setSelectLanguage] = useState(false);
  const [selectGenre, setSelectGenre] = useState(false);
  const [selectFormat, setSelectFormat] = useState(false);

  const [filterCategory, setFilterCategory] = useState(["Now Showing"]);
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);
  const [formats, setFormats] = useState([]);

  const [searchMovie, setSearchMovie] = useState("");

  const handleLanguageChange = () => {
    setSelectLanguage(!selectLanguage);
  };
  const handleGenreChange = () => {
    setSelectGenre(!selectGenre);
  };
  const handleFormatChange = () => {
    setSelectFormat(!selectFormat);
  };

  const updateFilters = (filterName, filterOption) => {
    if (filterName === "category") {
      setFilterCategory((prevFilterCategory) => {
        if (!prevFilterCategory.includes(filterOption)) {
          return [...prevFilterCategory, filterOption];
        } else {
          return prevFilterCategory.filter((option) => option !== filterOption);
        }
      });
    } else if (filterName === "language") {
      setLanguages((prevLanguages) => {
        if (!prevLanguages.includes(filterOption)) {
          return [...prevLanguages, filterOption];
        } else {
          return prevLanguages.filter((option) => option !== filterOption);
        }
      });
    } else if (filterName === "genre") {
      setGenres((prevGenres) => {
        if (!prevGenres.includes(filterOption)) {
          return [...prevGenres, filterOption];
        } else {
          return prevGenres.filter((option) => option !== filterOption);
        }
      });
    } else if (filterName === "format") {
      setFormats((prevFormats) => {
        if (!prevFormats.includes(filterOption)) {
          return [...prevFormats, filterOption];
        } else {
          return prevFormats.filter((option) => option !== filterOption);
        }
      });
    }
  }

  // console.log("searchMovie:", searchMovie)

  return (
    <div className="MovieFilter">
      <div className="MovieFilter-Options">
        <ul className="MovieFilter-Category-List">
          <li onClick={() => { updateFilters("category", "Now Showing") }}>Now Showing</li>
          <li onClick={() => { updateFilters("category", "Coming Soon") }}>Coming Soon</li>
          <li onClick={() => { updateFilters("category", "Exclusive") }}>Exclusive</li>
        </ul>

        <input
          type="text"
          value={searchMovie}
          placeholder="movie name?"
          onChange={(e) => setSearchMovie(e.target.value)}
          className="searchMovie"
        />
      </div>

      <div className="MovieFilter-Filters">
        <div className="MovieFilter-Filter-Container">
          <div className="MovieFilter-Filter-List">
            <p
              className="MovieFilter-Filter-Name"
              onClick={handleLanguageChange}
            >
              <FontAwesomeIcon icon={faAngleDown} className="dropDownIcon" />
              <span>Select Language</span>
            </p>
            {selectLanguage && (
              <div className="MovieFilter-Filter-LabelDiv">
                <label htmlFor="Tamil" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Tamil"
                    id="Tamil"
                    name="language"
                    onClick={() => updateFilters("language", "Tamil")}
                  />
                  <span>Tamil</span>
                </label>

                <label htmlFor="English" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="English"
                    id="English"
                    name="language"
                    onClick={() => updateFilters("language", "English")}
                  />
                  <span>English</span>
                </label>

                <label htmlFor="Hindi" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Hindi"
                    id="Hindi"
                    name="language"
                    onClick={() => updateFilters("language", "Hindi")}
                  />
                  <span>Hindi</span>
                </label>
              </div>
            )}
          </div>

          <div className="MovieFilter-Filter-List">
            <p
              className="MovieFilter-Filter-Name"
              onClick={handleGenreChange}
            >
              <FontAwesomeIcon icon={faAngleDown} className="dropDownIcon" />
              <span>Select Genre</span>
            </p>
            {selectGenre && (
              <div className="MovieFilter-Filter-LabelDiv">
                <label htmlFor="Action" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Action"
                    id="Action"
                    name="language"
                    onClick={() => updateFilters("genre", "Action")}
                  />
                  <span>Action</span>
                </label>

                <label htmlFor="Comedy" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Comedy"
                    id="Comedy"
                    name="language"
                    onClick={() => updateFilters("genre", "Comedy")}
                  />
                  <span>Comedy</span>
                </label>

                <label htmlFor="Horror" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Horror"
                    id="Horror"
                    name="language"
                    onClick={() => updateFilters("genre", "Horror")}
                  />
                  <span>Horror</span>
                </label>

                <label htmlFor="Commercial" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Commercial"
                    id="Commercial"
                    name="language"
                    onClick={() => updateFilters("genre", "Commercial")}
                  />
                  <span>Commercial</span>
                </label>

                <label htmlFor="Disney" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="Disney"
                    id="Disney"
                    name="language"
                    onClick={() => updateFilters("genre", "Disney")}
                  />
                  <span>Disney</span>
                </label>
              </div>
            )}
          </div>

          <div className="MovieFilter-Filter-List">
            <p
              className="MovieFilter-Filter-Name"
              onClick={handleFormatChange}
            >
              <FontAwesomeIcon icon={faAngleDown} className="dropDownIcon" />
              <span>Select Format</span>
            </p>
            {selectFormat && (
              <div className="MovieFilter-Filter-LabelDiv">
                <label htmlFor="2D" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="2D"
                    id="2D"
                    name="language"
                    onClick={() => updateFilters("format", "2D")}
                  />
                  <span>2D</span>
                </label>

                <label htmlFor="3D" className="MovieFilter-Filter-Label">
                  <input
                    type="checkbox"
                    value="3D"
                    id="3D"
                    name="language"
                    onClick={() => updateFilters("format", "3D")}
                  />
                  <span>3D</span>
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="MovieFilter-Result-Container">
          <MovieResult category={filterCategory} language={languages} genre={genres} format={formats} searchMovie={searchMovie} />
        </div>

      </div>
    </div >
  );
};

export default MovieFilter;
