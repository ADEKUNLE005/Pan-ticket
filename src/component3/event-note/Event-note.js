import React from "react";
import "./Event-not.css";
function EventNote() {
  return (
    <div className="event-note-box">
      <div className="box-1">
        <div className="box1-a">MUYIWA ADIGUN SHOW </div>
        <p id="box1-b">
          Muyiwa Adigun Show, the producer and promoter of "PELUMI," is a
          non-governmental organization with the goal of uniting families and
          entertaining wisdom. Through entertainment, we hope to proclaim and
          promote the practice of sound family values, as well as educate young
          people on the dynamics of a fulfilling and decent relationship,
          thereby building a peaceful and productive society and nation. We
          pursue this vision by organizing conferences, seminars, talk shows,
          online articles, and podcasts, as well as stage plays in places where
          young people congregate
        </p>
      </div>
      <div className="box2">
        <Text
          TextA={<div className="text-a">Phone Number</div>}
          TextB={<div className="text-b">0802 134 5678</div>}
        />

        <Text
          TextA={<div className="text-a">Email</div>}
          TextB={<div className="text-b">hello@pelumi.com</div>}
        />

        <Text
          TextA={<div className="text-a">Twitter</div>}
          TextB={<div className="text-b">@pelumi</div>}
        />

        <Text
          TextA={<div className="text-a">Instagram</div>}
          TextB={<div className="text-b">@pelumi</div>}
        />
        <Text
          TextA={<div className="text-a">Facebook</div>}
          TextB={<div className="text-b">facebook.com/pelumi</div>}
        />
      </div>
    </div>
  );
}

export function Text({ TextA, TextB }) {
  return (
    <div className="text-box">
      <div>{TextA}</div>
      <div>{TextB}</div>
    </div>
  );
}

export default EventNote;
