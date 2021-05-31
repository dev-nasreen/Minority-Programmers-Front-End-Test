import React from 'react';
import LearnBanner from '../../Components/LearnBanner/LearnBanner';
import LearnPageBody from '../../Components/LearnPagebody/LearnPageBody';
import SearchCourse from '../../Components/SearchCourse/SearchCourse';

const LearnPage = () => {
    return (
        <div>
            <LearnBanner/>
            <SearchCourse/>
            <LearnPageBody></LearnPageBody>
        </div>
    );
};

export default LearnPage;