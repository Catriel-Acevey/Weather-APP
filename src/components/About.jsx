import React from "react";
import Image from "../img/cloudy-day.png";
import "./About.css";

function About() {
  return (
    <div>
      <div className="card text-white shadow-lg">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Weather App</h1>
              <p className="card-text">
                This is an application to see the weather anywhere in the world
                in real time.<br></br>It was made to practice part of what he
                learned at bootcamp henry
              </p>
              <h4>Made by Catriel Acevey</h4>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Image} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
