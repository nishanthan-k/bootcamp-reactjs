import React, { useRef, useState } from "react";
import "../css/MovieHeader.css";
import MovieSelect from "./MovieSelect";

const MovieHeader = () => {
    const filterCategoryList = ["Now Showing", "Coming Soon", "Exclusive"];

    const [category, setCategory] = useState({
        "NowShowing": false,
        "comingSoon": false,
        "Exclusive": false,
    })

    const filterCategoryRef = useRef({
        nowShowing: false,
        comingSoon: false,
        exclusive: false,
    })

    const handleFilterChange = (cate, value, e) => {
        e.preventDefault();

        filterCategoryRef[value] = !filterCategoryRef[value];
        document.getElementById(value).style.color = "blue";
        filterCategoryRef[value] ? document.getElementById(value).style.color = "blue" : document.getElementById(value).style.color = "black";

        if (value === "Now Showing") {
            setCategory({NowShowing: !category.NowShowing, comingSoon: category.comingSoon, Exclusive: category.Exclusive})
        } else if (value === "Coming Soon") {
            setCategory({NowShowing: category.NowShowing, comingSoon: !category.comingSoon, Exclusive: category.Exclusive})
        } else {
            setCategory({NowShowing: category.NowShowing, comingSoon: category.comingSoon, Exclusive: !category.Exclusive})
        }
    }
    // console.log(category);

    return (
        <>
            <div className="MovieHeader">
                <div className="header">
                    <div className="show-time">ShowTime</div>

                    <u className="header-list">
                        <li className="nav-list-links">Term Insurance</li>
                        <li className="nav-list-links">Customer Service</li>
                        <li className="nav-list-links">About Us</li>
                    </u>
                </div>

                <div className="MovieFilter-FilterCategory Prevent-text-Select">
                    <ul className="FilteCategory-List">
                        { filterCategoryList.map((filterCategory) => (
                            <li key={ filterCategory } className="FilterCategory-ListItems" onClick={ (e) => handleFilterChange("Filter Category", filterCategory, e) }><p id={ filterCategory }>{ filterCategory }</p></li>
                        )) }
                    </ul>
                </div>

            </div>

            <MovieSelect category={category}/>
        </>
    );
};


export default MovieHeader;
