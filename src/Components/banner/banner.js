import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import Button from "../misc/button/button";
function Banner({ link }) {
  return (
    <div className="banner-main">
      <p id="banner-para">
        connect and get your tickets to events
        <br /> near you based on your
        <br /> interest
      </p>
      <form className="banner-form">
        <input
          type="text"
          name="search-event"
          className="search-event"
          placeholder="Search Event"
        />
        <input
          type="text"
          name="category"
          className="category"
          placeholder="Category"
        />

        {/* <button className='confirm'>confirm ticket</button> */}
        {
          <Link to={link} className="link">
            <Button title={"Confirm Ticket"} btnClass={"confirm"} />
          </Link>
        }
        {/* {link} */}
      </form>
    </div>
  );
}

export default Banner;
