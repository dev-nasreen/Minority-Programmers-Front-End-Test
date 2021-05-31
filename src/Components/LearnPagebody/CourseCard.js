import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { courseName, courseSubTitle, modulesCompletion, completionRate, modules, id } = course;
    return (
        <div className="course-card rounded text-white me-3 p-4">
            <div className="card-title">
                <h3>{courseName}</h3>
                <p>{courseSubTitle}</p>
            </div>
            <div className="text-center my-3">
                <Link to={'/userDashboard/'+id} className="learn-btn">Learn</Link>
            </div>
            <div>
                <p className="text-end">{modulesCompletion}</p>
            </div>
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="{completionRate}" aria-valuemin="0" aria-valuemax="100"> </div>   
            </div>
            <p className="text-center" style={{fontSize:'14px', marginTop:'-10px'}}>{completionRate}% Completed</p>
        </div>
    );
};

export default CourseCard;