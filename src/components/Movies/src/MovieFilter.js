import React, { useState } from "react";
import "../css/MovieFilter.css";

const MovieFilter = () => {
  const [selectLanguage, setSelectLanguage] = useState(false);
  const [selectGenre, setSelectGenre] = useState(false);
  const [selectFormat, setSelectFormat] = useState(false);

  const [filterCategory, setFilterCategory] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([]);
  const [formats, setFormats] = useState([]);

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
      if (!filterCategory.includes(filterOption)) {
        filterCategory.push(filterOption)
      } else {
        filterCategory.splice(filterCategory.indexOf(filterOption), 1);
      }
    } else if (filterName === "language") {
      if (!languages.includes(filterOption)) {
        languages.push(filterOption)
      } else {
        languages.splice(languages.indexOf(filterOption), 1);
      }
    } else if (filterName === "genre") {
      if (!genres.includes(filterOption)) {
        genres.push(filterOption)
      } else {
        genres.splice(genres.indexOf(filterOption), 1);
      }
    } else if (filterName === "format") {
      if (!formats.includes(filterOption)) {
        formats.push(filterOption)
      } else {
        formats.splice(formats.indexOf(filterOption), 1);
      }
    }

    console.log(filterCategory)
    console.log(languages);
    console.log(genres);
    console.log(formats);
  }

  return (
    <div className="MovieFilter">
      <div className="MovieFilter-Options">
        <ul className="MovieFilter-List">
          <li onClick={() => {updateFilters("category", "Now Showing")}}>Now Showing</li>
          <li onClick={() => {updateFilters("category", "Coming Soon")}}>Coming Soon</li>
          <li onClick={() => {updateFilters("category", "Exclusive")}}>Exclusive</li>
        </ul>
      </div>

      <div className="MovieFilter-Filters">
        <div className="MovieFilter-Filter-List">
          <p
            className="MovieFilter-Filter-Name"
            onClick={handleLanguageChange}
          >
            Select Language
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
            Select Genre
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
            Select Format
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
    </div >
  );
};

export default MovieFilter;
