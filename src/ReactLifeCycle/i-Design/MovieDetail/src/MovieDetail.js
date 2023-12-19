import { faCircleArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../css/MovieDetail.css";
import { theaterList } from "./movieData";

const MovieDetail = (props) => {
  const [showTimings, setShowTimings] = useState(false);
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedShowDate, setSelectedShowDate] = useState("");
  const [movieTimings, setMovieTimings] = useState([]);
  const [showTheaterDetails, setShowTheaterDetails] = useState(false);
  const [showRate, setShowRate] = useState(false);
  const [showConfirmBooking, setShowConfirmBooking] = useState(false);
  const [confimMovieTime, setConfimMovieTime] = useState({
    time: "",
    status: "",
    rate: "",
  });
  const [ticketCount, setTicketCount] = useState(1);
  const [movieBooked, setMovieBooked] = useState(false);

  const handleVisited = () => {
    setShowTimings(!showTimings);
  };

  const handleSubmit = () => {
    if (selectedTheater === "" || selectedTheater === "N/A") {
      window.alert("Select the theatre");
    } else if (
      selectedShowDate === "" ||
      selectedShowDate.split("-").length < 3 ||
      selectedShowDate.split("-")[2].length !== 4
    ) {
      window.alert("Invalid Date Format");
    } else {
      setShowTheaterDetails(true);
    }

    theaterList.map((theater, index) => {
      let timings = [];
      theaterList.map(
        (theater, index) =>
          selectedTheater === theater.name &&
          theater.showTimings.map((details) => timings.push(details))
      );
      setMovieTimings(timings);
    });
  };

  const toggleHover = () => {
    setShowRate(!showRate);
  };

  const confirmBooking = (t, s, r) => {
    setShowConfirmBooking(!showConfirmBooking);
    // setState((state) => ({ ...state, prop3: value }));
    setConfimMovieTime((prevState) => ({
      ...prevState,
      time: t,
      status: s,
      rate: r,
    }));
  };

  const confirmSubmit = () => {
    setShowConfirmBooking(!showConfirmBooking);
    setMovieBooked(true);
  };

  return (
    <div className="MovieDetail">
      <div className="movieBgDark"></div>
      <div className="movieBgLight"></div>
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="backArrow"
      ></FontAwesomeIcon>
      <div className="MovieDetalil-Container">
        <div className="MovieDetail-Detail">
          <img
            src={props.movie.src}
            alt={props.movie.name}
            width={200}
            height={250}
            className="movieImg"
          ></img>
          <div className="MovieDetail-Desc">
            <p className="movieName">{props.movie.name}</p>
            <div className="MovieDetail-TicketDesc">
              <p
                className={
                  !showTimings ? "movieOptions visited" : "movieOptions"
                }
                onClick={handleVisited}
              >
                Summary
              </p>
              <p
                className={
                  showTimings ? "movieOptions visited" : "movieOptions"
                }
                onClick={handleVisited}
              >
                Show Timings
              </p>
            </div>
          </div>
        </div>
      </div>
      {showTimings ? (
        <div className="MovieDetail-ShowDetails">
          <div className="MovieDetail-SelectDetails">
            <span className="MovieDetail-Select">
              <label htmlFor="select-theater">Theater</label>
              <select
                name="select-theater"
                id="select-theater"
                required
                onChange={(e) => {
                  setSelectedTheater(e.target.value);
                  if (showTheaterDetails) setShowTheaterDetails(false);
                }}
              >
                <option
                  value={"N?A"}
                  onChange={(e) => setSelectedTheater(e.target.value)}
                >
                  --Select Theater--
                </option>
                {theaterList.map((theater, index) => (
                  <option key={index} value={theater.name}>
                    {theater.name}
                  </option>
                ))}
              </select>
            </span>

            <span className="MovieDetail-Select">
              <label htmlFor="select-date">Date</label>
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                onChange={(e) => {
                  setSelectedShowDate(e.target.value);
                  setShowTheaterDetails(false);
                }}
                required
              />
            </span>
            <button className="viewTicketBtn" onClick={handleSubmit}>
              View Theater
            </button>
          </div>
          {showTheaterDetails && (
            <div className="MovieDetail-TicketDetails">
              <p>{selectedTheater}</p>
              <div className="MovieDetail-ShowTimings">
                {movieTimings.map((time, index) => (
                  <div>
                    {toggleHover === true && (
                      <div
                        key={index * 2 + 1 - index * 3}
                        className="MovieDetail-MovieRate"
                      >
                        <p key={index * 2 + 1 - index * 3}>Time: {time.time}</p>
                        <p key={index * 2 + 2 - index * 3}>
                          Rate: INR.{time.rate}
                        </p>
                      </div>
                    )}
                    <p
                      key={index}
                      id={`show${index}`}
                      onMouseEnter={toggleHover}
                      onMouseLeave={toggleHover}
                      onClick={() =>
                        confirmBooking(time.time, time.seats, time.rate)
                      }
                      className={
                        time.seats === "Filled"
                          ? "movie-timing red"
                          : time.seats === "Filling Fast"
                          ? "movie-timing yellow"
                          : "movie-timing green"
                      }
                    >
                      {time.time}
                    </p>
                  </div>
                ))}
              </div>
              {/* {movieTimings.map(
                (time, index) =>
                  index === 0 && (
                    <div className="MovieDetail-MovieRate">
                      <p>Time: {time.time}</p>
                      <p>Rate: INR.{time.rate}</p>
                    </div>
                  )
              )} */}
            </div>
          )}
          {movieBooked && (
            <div className="movie-booked">
              <h2>Booking Confirmed</h2>
              <div className="movie-booked-details">
                <p>Theater: {selectedTheater}</p>
                <p>Movie: {props.movie.name}</p>
                <p>Date: {selectedShowDate}</p>
                <p>Time: {confimMovieTime.time}</p>
                <p>Count: {ticketCount}</p>
                <p>Rate: {confimMovieTime.rate * ticketCount}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="MovieDetail-Synopsis">
          <h2>Synopsis</h2>
          <p>{props.movie.synopsis}</p>
        </div>
      )}
      {showConfirmBooking && (
        <div className="confirm-booking">
          <div className="booking-header">
            <h2>Booking Details</h2>
            <FontAwesomeIcon
              icon={faXmark}
              className="close-icon"
              onClick={confirmBooking}
            ></FontAwesomeIcon>
          </div>
          <div className="confirm-desc">
            <h2 className="movie-booking-theater">{selectedTheater}</h2>
            <div className="movie-desc">
              <div className="movie-date-name">
                <p className="movie-booking-date">{selectedShowDate}</p>
                <p className="booking-movie-name">({props.movie.name})</p>
              </div>
              <div className="movie-time">
                <p
                  className={
                    confimMovieTime.status === "Filled"
                      ? "movie-timing red"
                      : confimMovieTime.status === "Filling Fast"
                      ? "movie-timing yellow"
                      : "movie-timing green"
                  }
                >
                  {confimMovieTime.time}
                </p>
              </div>
            </div>
          </div>
          <div className="movie-ticket-input">
            <div className="movie-user-input">
              <input
                type="number"
                value={ticketCount}
                onChange={(e) => setTicketCount(e.target.value)}
                className="movie-ticket-count"
              />
              <p>Total cost : INR{confimMovieTime.rate * ticketCount}</p>
            </div>
            <button className="cofirmTicketBtn" onClick={confirmSubmit}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
