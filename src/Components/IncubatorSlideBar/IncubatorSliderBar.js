import React from 'react';

const IncubatorSlideBar = (props) => {
    const { icon, title, shortDescription, fundStatus, fundCompletation, fundAmount } = props.startupsCard;

    return (

        <div className="feature-card rounded pt-4 pb-0">
            <div className="row">
                <div className="col-md-3">
                    <div className="card-title d-flex">
                        <p><img src={icon} alt="" /></p>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" d-flex justify-content-between ">
                        <h5 style={{ fontSize: '14px' }}  className="m-0">{fundStatus}</h5>
                        <p style={{ fontSize: '14px', float: "right" }} className="m-0">{fundCompletation}</p>
                    </div>
                    <h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>{fundAmount}</h5>
                </div>
                <div className="col-md-3 pt-3">
                    <div className="progress mb-4">
                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <button
                    style={{
                    background:
                        "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
                    border: "none",
                    }}
                        className="btn text-white btn-center rounded-0 px-4"
                    >
                        Fund Startups
                    </button>
                </div>
            </div>
        </div>

    );
};

export default IncubatorSlideBar;