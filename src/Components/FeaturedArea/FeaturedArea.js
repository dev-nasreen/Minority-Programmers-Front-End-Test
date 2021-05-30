import React from 'react';
import FeaturedStartups from '../FeaturedStartups/FeaturedStartups';
import FeaturedSupport from '../FeaturedSupport/FeaturedSupport';
import UpcomingStartups from '../UpcomingStartups/UpcomingStartups';

const FeaturedArea = () => {
    return (
        <section className="features">
            <div>
                <div className="row">
                    <FeaturedStartups></FeaturedStartups>
                    <FeaturedSupport/>
                    <UpcomingStartups></UpcomingStartups>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArea;