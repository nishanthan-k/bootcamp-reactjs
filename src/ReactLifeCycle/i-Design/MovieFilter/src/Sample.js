// import React, { useState, useRef } from "react";
// import "../css/MovieFiler.css";

// const MovieFilter = () => {
//   const [state, setState] = useState({
//     isSelectLanguage: false,
//     isSelectGenre: false,
//     isSelectFormat: false,
//   });

//   const languageRef = useRef({
//     Tamil: false,
//     English: false,
//     Hindi: false,
//   });

//   const genreRef = useRef({
//     Action: false,
//     Comedy: false,
//     Horror: false,
//     Commercial: false,
//     Disney: false,
//   });

//   const formatRef = useRef({
//     "2D": false,
//     "3D": false,
//   });

//   const updateBool = (option) => {
//     setState((prevState) => ({
//       ...prevState,
//       [option]: !prevState[option],
//     }));
//   };

//   const handleCheckboxChange = (category, value) => {
//     const ref = category === "Languages" ? languageRef.current : category === "Genres" ? genreRef.current : formatRef.current;

//     ref[value] = !ref[value];
//   };

//   const FilterMoviesResult = () => {
//     console.log("Selected Languages:", getSelectedOptions(languageRef.current));
//     console.log("Selected Genres:", getSelectedOptions(genreRef.current));
//     console.log("Selected Formats:", getSelectedOptions(formatRef.current));
//   };

//   const getSelectedOptions = (refObject) => {
//     return Object.keys(refObject).filter((key) => refObject[key]);
//   };







//   const movies = [];
//   let movieAudio = [];
//   let movieGenre = [];
//   let movieFormat = [];
//   let movieFilterCategory = [];

//   if (state.isSelectFilterCatergory === false) {
//     // filterCategoryList.map((filters) => {
//     //   // console.log(filters.toLowerCase().indexOf(" "))
//     //   let word = filters.toLowerCase();
//     //   let index = word.indexOf(" ");

//     //   if (index > 0 && index < word.length) {
//     //       word = word.substring(0, index) + word[index+1].toUpperCase() + word.substring(index+2);
//     //   }

//     //   // console.log(word)
//     // })
//     movieList.map((movieGroup) => {
//       movieGroup.map((individualMovies) => {
//         movies.push(individualMovies);
//         // console.log("pushing");
//       });
//     });

//     // console.log(movies);
//     // console.log(Object.keys(movies).length);
//   } else {
//     console.log("else");

//     Object.entries(languagesRef.current).map((audio) => {
//       if (audio[1] === true) {
//         // console.log(audio[0], "1")
//         // console.log("console")
//         movieAudio.push(audio[0]);
//       }
//       // console.log(audio[0])
//     });

//     console.log("movieAudio", movieAudio);
//   }
//   movieList.map((movieGroup) => {
//     movieGroup.map((movie) => {
//       movieAudio.map((audio) => {
//         console.log(audio);
//       });
//     });
//   });

//   // console.log(movies)
//   return (
//     <div className="MovieFilter-FilterResult">
//       {movies.map((movie, i) => (
//         <div key={`movie.name${i}`}>
//           <img src={movie.src} alt={movie.name} height={"250"} />
//         </div>
//       ))}
//     </div>
//   );












  


//   return (
//     <>
//       {/* ... (your existing JSX) ... */}

//       <div className="MovieFilter-MoviesSection">
//         <div className="MovieFilter-FilterOption">
//           <ul className="MovieFilter-FilterOptionList">
//             {/* ... (your existing JSX) ... */}

//             <li className="MovieFilter-FilterOptionListItems">
//               <p id="selectLanguage" onClick={() => updateBool("isSelectLanguage")}>
//                 Select Language
//               </p>
//               {state.isSelectLanguage && (
//                 <div className="MovieFilter-FilterOptionList-LanguageOption">
//                   {/* Use map to dynamically render checkboxes */}
//                   {["Tamil", "English", "Hindi"].map((language) => (
//                     <div key={language} className="MovieFilter-FilterOptionList-Language MovieFilter-DropDownFilter">
//                       <input
//                         type="checkbox"
//                         value={language}
//                         name={language}
//                         onChange={() => handleCheckboxChange("Languages", language)}
//                       />
//                       <label htmlFor={language}>{language}</label>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </li>
//             {/* ... (similar updates for genres and formats) ... */}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieFilter;
