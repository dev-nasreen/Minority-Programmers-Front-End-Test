import React from "react";
import adviceStartup from "../../images/adviceStartup.png";
import joinMinority from "../../images/joinMinority.png";
import helpCode from "../../images/helpCode.png";
import "./FeaturedSupport.css";

const FeaturedSupportData = [
  {
    img: adviceStartup,
    btnTitle: "Advice a startup",
  },
  {
    img: joinMinority,
    btnTitle: "Join Minority Ventures Cohort",
  },
  {
    img: helpCode,
    btnTitle: "Help <Code/>",
  },
];

const FeaturedSupport = () => {
  return (
    <section>
      <div className="d-flex justify-content-center mt-5 container">
        <div className="row">
          {FeaturedSupportData.map((featuredSupport) => (
            <div className="col-md-4">
              <img
                src={featuredSupport.img}
                alt=""
                className="img-fluid rounded"
              />
              <div>
                <button className="btn SupportBtn btn-outline-light">
                  {featuredSupport.btnTitle}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSupport;
