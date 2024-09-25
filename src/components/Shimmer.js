import React from 'react';

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-search-box shimmer-effect"></div>
      <div className="shimmer-cards">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="shimmer-card shimmer-effect"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
