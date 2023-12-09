import React from "react";
import "./result.css";
import { FeaturedEvents } from "../../Components/section/section";
function Result() {
  return (
    <div className="result-main">
      <p className="search-para">Search Result</p>
      <div className="inner-main">
        <ResultCard image={"../../../images/newimage1.png"} />
        <ResultCard image={"../../../images/newimage2.png"} />
        <ResultCard image={"../../../images/newimage2.png"} />
      </div>

      <p className="feature-event">Featured Events</p>
      <div className="feature-box">
        <FeaturedEvents image={"../../../images/image9.png"} />
        <FeaturedEvents image={"../../../images/image10.png"} />
      </div>
    </div>
  );
}

export default Result;

export function ResultCard({ image }) {
  return (
    <div className="result-card-main">
      <img src={image} alt="Event displayed" className="result-image" />

      <div className="result-other">
        <div className="result-other-box1">
          <div className="result-title-box">
            <p className="title">Title</p>
            <p className="date">Date</p>
            <p className="venue">Venue address</p>
          </div>
          <div className="innerbox-1">
            <p className="attendies"># of attendies</p>
            <p className="organizer">organizer</p>
          </div>
        </div>
        <p className="price">Price</p>
      </div>
    </div>
  );
}
