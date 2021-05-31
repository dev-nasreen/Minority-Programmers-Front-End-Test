import React, { useEffect, useState } from 'react';
import upcomingStartupsCard from '../fakeData/home.json';
import StartupsCardDetails from '../StartupsCardDetails/StartupsCardDetails';
import './UpcomingStartups.css';

const UpcomingStartups = () => {
    const [startupsCards, setStartupsCards] = useState([]);
    

    useEffect(() => {
        setStartupsCards(upcomingStartupsCard);
    }, [])

    return (
      <div>
        <div className="my-5">
          <div className="startups-card-container row ">
            <div className="upcoming-startups col-md-3 py-5 text-white">
              <h2>Upcoming</h2>
              <h2>Startups</h2>
              <p>
                These visionary companies and disruptors are on their journey to
                change the world.
              </p>
            </div>

            {startupsCards.map((startupsCard) => (
              <StartupsCardDetails startupsCard={startupsCard} />
            ))}
          </div>
        </div>
        <div className="text-center mb-5 ">
          <button className="btn btn-outline-light px-5 loadMore-btn">
            Load More
          </button>
        </div>
      </div>
    );
};

export default UpcomingStartups;