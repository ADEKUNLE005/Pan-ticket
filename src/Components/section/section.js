import React from "react";
import "./section.css";

function Section() {
  return (
    <div className=" event-section-main">
      <p className="event-section-para"> Events near you</p>

      <div className="box">
        <div className="imageOne">
          <EventSectionCard image={"../../../images/imagea.png"} />

          <EventSectionCard image={"../../../images/imageb.png"} />
          <EventSectionCard image={"../../../images/imagec.png"} />
        </div>
        <div className="imageTwo">
          <EventSectionCard image={"../../../images/imaged.png"} />
          <EventSectionCard image={"../../../images/imagee.png"} />
          <EventSectionCard image={"../../../images/imagef.png"} />
        </div>

        <div className="imageThree">
          <EventSectionCard image={"../../../images/imageg.png"} />
          <EventSectionCard image={"../../../images/imageh.png"} />
          <EventSectionCard image={"../../../images/imagei.png"} />
        </div>
      </div>

      <p className="feature-event">Featured Events</p>
      <div className="feature-box">
        <FeaturedEvents image={"../../../images/image9.png"} />
        <FeaturedEvents image={"../../../images/image10.png"} />
      </div>
    </div>
  );
}

export default Section;

export function EventSectionCard({ image }) {
  return (
    <div className="event-section-card-main">
      <img src={image} alt="Event displayed" className="event-section-image" />
      <div className="event-section-other">
        <p className="event-name">Event name</p>
        <p className="event-date">date</p>
        <p className="event-location">location</p>
        <p className="event-price">#2000</p>
      </div>
    </div>
  );
}

export function FeaturedEvents({ image }) {
  return (
    <div className="feature-section-card-main">
      <img
        src={image}
        alt="Event displayed"
        className="feature-section-image"
      />
      <div className="feature-section-other">
        <div className="name-box">
          <p className="feature-name">Event name</p>
          <p className="lagos">Gbagada, Lagos on october 5, 2023 </p>
          <div className="discount-box">
            {" "}
            <p className="discount"> Get 20% off</p>
          </div>
        </div>

        <div className="price-box">
          <p className="feature-price">#200000</p>
        </div>
      </div>
    </div>
  );
}
