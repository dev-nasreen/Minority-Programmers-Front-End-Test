import React from 'react';
import CourseSlider from './CourseSlider';



const LearnPageBody = () => {


    return (
      <div className="learn-page-container">
        <div className="container">
          <div className="title text-white">
            <h2>My Courses</h2>
          </div>
          <CourseSlider></CourseSlider>
        </div>
        <div className="container mt-5">
          <div className="title f-title text-white">
            <h2>Featured Courses</h2>
          </div>
          <CourseSlider></CourseSlider>
        </div>
        <div className="text-center mt-5 ">
          <button className="btn btn-outline-light px-5">
            Learn More
          </button>
        </div>
      </div>
    );
};

export default LearnPageBody;