import React from "react";
import "./events.css";
function Event() {
  return (
    <div className="event-box">
      <div id="description-box">
        <div className="description">Event Desription</div>
        <div id="description-note">
          The play, "Pelumi," is a musical love story that revolves around
          Pelumi, a woman who was in a relationship with Adigun, a man with
          direction and purpose, but felt pressured by her mother to find love
          with someone else because of her mother's wealth and availability. You
          won’t want to miss this show on this year valentine.
        </div>
      </div>
      <div className="date-box">
        <div id="date">Date And Time</div>
        <div className="date-innerbox">
          <div className="real-date">14th February, 2022</div>
          <div className="time">5PM Prompt</div>
        </div>
      </div>

      <div className="venue-box">
        <div id="venue">Venue</div>
        <div className="Venue-note">
          Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State
        </div>
      </div>
    </div>
  );
}

export default Event;
