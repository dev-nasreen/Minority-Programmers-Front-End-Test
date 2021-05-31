import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import courseModules from '../fakeData/courseModules.json'

const CourseItems = () => {
    const { _id } = useParams();
    console.log(_id)
    const [weekClass, setWeekClass] = useState({});
    console.log(courseModules);

    useEffect(() => {
        const oneCourseItem = courseModules.find(pd => pd._id == _id);
        setWeekClass(oneCourseItem);

    }, [_id]);

    console.log(weekClass);
    const { week } = weekClass;
    return (
        <div className="">
            <div className="row">
                <div className="col-md-3 learn-page-container">
                    <h3>This is sidebar</h3>
                </div>
                <div className=" col-md-9 px-3">
                    <div className="row">

                    </div>
                    <div className="row learn-page-container">
                        {
                            week?.map(activity => <div className="week-card w-75 my-3 mx-auto">
                                <Link to={'/courseActivities/'+activity.__id}>
                                    <div className="card-details p-4 mb-3 text-white text-center d-flex">
                                        <div className="activity"><img src={activity.img} className="img-fluid" alt="video1" /></div>
                                        <div className="my-auto ms-3">
                                            <h3>{activity.classTitle}</h3>
                                        </div>
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

export default CourseItems;