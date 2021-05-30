import React from 'react';
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className="featuredHome-container">
        <main className="row d-flex align-items-center container-brand">
          <div className="col-md-4"></div>
          <div className="col-md-4 offset-md-3 mt-5">
            <h1 className="mt-5" style={{ color: "#ffff" }}>
              Invest directly into <br /> minority innovations.
            </h1>
            <button
              style={{
                background:
                  "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
                border: "none",
              }}
              className="btn-lg text-white mt-3 btn-center rounded-0"
            >
              View Startups
            </button>
          </div>
        </main>
      </div>
    );
};

export default HomeBanner;