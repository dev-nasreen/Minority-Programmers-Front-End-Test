import React from 'react';

const SearchCourse = () => {
    return (
      <div className="searchCourse-container">
        <div className="input-group rounded">
          <div className="w-50 mx-auto mt-5">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </div>
      </div>
    );
};

export default SearchCourse;