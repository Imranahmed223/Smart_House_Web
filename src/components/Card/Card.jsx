import React from "react";
import './Card.scss'
const Card = ({icon, heading, value, healthy,color}) => {
  return (
    <>
      <div className={`${color} card`}>
        <div className="card-container">
          <div className="card-container-top">
            <img src={icon} alt="icons" />
            <h4>{heading}</h4>
          </div>
          <div className="card-container-content">
            <h5>Average</h5>
            <h1>{value}</h1>
            {/* <p>Watts</p> */}
          </div>
        </div>
        <div className="card-bottom">
          <h6>{healthy}</h6>
        </div>
      </div>
    </>
  );
};

export default Card;
