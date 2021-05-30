
import React, { useState, useEffect } from 'react';
import allcourses from '../fakeData/course.json'
import CourseCard from './CourseCard';
import Slider from "react-slick";

const CourseSlider = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(allcourses);
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
      };

    return (
        <div>
             <Slider {...settings}>
            {
                courses.map((course) => <CourseCard course={course} key={course.id}></CourseCard>)
            }
            </Slider>
        </div>
    );
};

export default CourseSlider;