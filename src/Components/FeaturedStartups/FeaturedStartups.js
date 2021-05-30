import React, { useEffect, useState } from 'react';
import upcomingStartupsCard from '../fakeData/home.json';
import Slider from "react-slick";
import './FeaturedStartups.css';
import FeatureCardDetails from './FeatureCardDetails';

const FeaturedStartups = () => {
    const [startupsCards, setStartupsCards] = useState([]);
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

    useEffect(() => {
        setStartupsCards(upcomingStartupsCard);
    }, [])

    return (
        <div>
            <div className="my-5">
                <div className="startups-card-container row ">
                    <div className="upcoming-startups col-md-3 py-5 text-white">
                        <h2>Featured</h2>
                        <h2>Startups</h2>
                        <p>These visionary companies and disruptors are on their journey to change the world.</p>
                    </div>
                    <div className="col-md-9">
                    <Slider {...settings}>
                    {
                        startupsCards.map(startupsCard => <FeatureCardDetails startupsCard={startupsCard} />)
                    }
                    </Slider>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default FeaturedStartups;