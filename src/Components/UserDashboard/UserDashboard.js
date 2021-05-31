import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CourseBanner from '../CourseBanner/CourseBanner';
import allcourses from '../fakeData/course.json'
const UserDashboard = () => {
    const { id } = useParams();

    const [courses, setCourses] = useState({});


    useEffect(() => {
        const singleCourse = allcourses.find(pd => pd.id == id);
        setCourses(singleCourse);

    }, [id]);

    const { modules } = courses;
    
    return (
        <div className="">
            <div className="row">
                <div className="col-md-3 learn-page-container">
                    <h3>This is sidebar</h3>
                </div>
                <div className=" col-md-9 px-3">
                    <div className="row">
                        <CourseBanner/>
                    </div>
                    <div className="row learn-page-container">
                        <div className="learn-menu mx-auto text-center">
                            <a className="active" href={"/userDashboard/"+module._id} >Modules</a>
                            <a href={"/userDashboard/"+module._id} >Calender</a>
                            <a href={"/userDashboard/"+module._id} >Messages</a>
                        </div>
                    {
                        modules?.map(module => <div className="week-card w-75 mb-3 mx-auto">
                            <Link to={"/courseItem/"+module._id}>
                            <div className="card-details p-4 mb-3 text-white text-center">
                                <h3>{module.weekTitle}</h3>
                                <div className="progress week-progress mb-2 w-75 mx-auto mt-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "83%" }} aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"> </div>   
                                </div>
                                <p>{module.mCompletionRate}% completed</p>
                            </div>
                            </Link>
                        </div>)
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
