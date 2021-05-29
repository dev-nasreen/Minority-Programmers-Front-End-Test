import React from 'react';
import FeaturedStartups from '../FeaturedStartups/FeaturedStartups';
import UpcomingStartups from '../UpcomingStartups/UpcomingStartups';

const FeaturedArea = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                 <FeaturedStartups></FeaturedStartups>  
                <UpcomingStartups></UpcomingStartups>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArea;