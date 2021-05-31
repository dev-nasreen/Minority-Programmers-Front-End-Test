import React from 'react';
import './LearnBanner.css'

const LearnBanner = () => {
    return (
      <div>
        <main className="container-brand row d-flex align-items-center">
          <div className="col-md-7 learnBanner-container"></div>
          <div className="col-md-5 course-banner">
            <div className="d-flex flex-column align-items-center ">
              <h1 className="mt-5" style={{ color: "#ffff" }}>
                Learn high in demand <br /> IT Skills & Get Crypto
              </h1>
              <h3 className="ms-5">
                {" "}
                <i className="text-white">powered by</i> KoinStreet
              </h3>
            </div>
          </div>
        </main>
      </div>
    );
};

export default LearnBanner;