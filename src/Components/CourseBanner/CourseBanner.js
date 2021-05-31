import React from 'react';
import ProfileImage from '../../images/porfile-image.png';

const CourseBanner = () => {
    return (
        <div className="course-banner">
            <div className="row">
                <div className="banner-profile col-md-4">
                    <img className="img-fluid" style={{height: "200px"}} src={ProfileImage} alt="" />
                </div>
                <div className="banner-content col-md-8">
                    <h2>Welcome back,</h2>
                    <h2>Shot</h2>
                    <p className="pt-3">75% Completed</p>
                    <div className="banner-resume">
                        <button className="btn button-resume">Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseBanner;