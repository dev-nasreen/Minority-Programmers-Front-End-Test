import React from 'react';
import { Link } from 'react-router-dom';
import './StartupsCardDetails.css'

const StartupsCardDetails = (props) => {
  
    const {icon, title, shortDescription, fundStatus, fundCompletation, fundAmount } = props.startupsCard;

    return (
      <div className="col-lg-3 col-md-6 ">
        <div className="startups-card rounded-3">
          <div className="card-title d-flex justify-content-between">
            <p>
              <img src={icon} alt="" />
            </p>
            <h3>{title}</h3>
          </div>
          <p style={{ fontSize: "14px" }}>{shortDescription}</p>
          <div className="">
            <div className=" d-flex justify-content-between ">
              <h5 style={{ fontSize: "14px" }}>{fundStatus}</h5>
              <p style={{ fontSize: "14px", float: "right" }}>
                {fundCompletation}
              </p>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>{fundAmount}</h5>
          <div className="d-flex justify-content-between mt-4">
            <div>
              <Link to="/incubator" className="brand-btn">Fund Startup</Link>
            </div>
            <div>
              <Link to="/learnPage" className="brand-btn">Learn More</Link>
            </div>  
          </div>
        </div>
      </div>
    );
};

export default StartupsCardDetails;