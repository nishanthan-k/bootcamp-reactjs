import React from "react";
import "../css/MovieStreaming.css"

const MovieStreaming = () => {
  return (
    <>
      <div className="MovieStreaming">

        <div className="MovieStreamingNowShowing">
          <p className="MovieStreamingHeading">Now Screening</p>

          <div className="MovieStreamingList">
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/bombshell.jpg')} alt="Bombshell" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/hero.png')} alt="Hero" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/chhapaak.png')} alt="Chhapaak" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/darbar.png')} alt="Darbar" />
            </div>
          </div>
        </div>

        <div className="MovieStreamingComingSoon">
          <p className="MovieStreamingHeading">Coming Soon</p>

          <div className="MovieStreamingList">
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/myspy.png')} alt="My Spy" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/tanhaji.png')} alt="Tanhaji" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/likeaboss.png')} alt="Likeaboss" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/underwater.png')} alt="Underwater" />
            </div>
          </div>
        </div>

        <div className="MovieStreamingExclusive">
          <p className="MovieStreamingHeading">Exclusive</p>

          <div className="MovieStreamingList">
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/bunker.png')} alt="Bunker" />
            </div>
            <div className="MovieStreamingImages">
              <img className="MovieStreamingPoster" src={require('../assets/img/countdown.png')} alt="Countdown" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default MovieStreaming;
