import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  return (
    <div className="ciudad">
      <div className="card text-white shadow-lg">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="round-bottom">
              <img
                src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
                className="image-city"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{city.name}</h2>
              <p className="card-text">Temperature: {city.temp} K</p>
              <p className="card-text">Weather: {city.weather}</p>
              <p className="card-text">Wind: {city.wind} km/h</p>
              <p className="card-text">Amount of clouds: {city.clouds}</p>
              <p className="card-text">Latitud: {city.latitud}º</p>
              <p className="card-text">Longitud: {city.longitud}º</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
