import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div>
      <div className="card shadow m-5 ">
        <img
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          className="card-img-top w-50"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-white">{name}</h5>
          <p className="card-text text-white">
            Max: {max}°. Min: {min}°.
          </p>
          <button onClick={onClose} className="btn btn-outline-danger">
            Close
          </button>
          <Link to={`/ciudad/${id}`} className="detail">
            <span className="btn btn-primary">Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
