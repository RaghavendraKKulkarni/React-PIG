import React, { useState } from 'react';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of cards (can be fetched from API or static data)
  const cards = [
    { id: 1, title: 'View Rules' },
    { id: 2, title: 'Manage Rules' },
    { id: 3, title: 'Manage Exceptions' },
    { id: 4, title: 'View SKUs' },
    { id: 5, title: 'Other Card 1' },
    { id: 6, title: 'Other Card 2' },
    { id: 7, title: 'Other Card 3' },
    { id: 8, title: 'Other Card 4' },
  ];

  const CARDS_PER_PAGE = 4; // Number of cards to display at a time

  // Determine the maximum index for sliding
  const maxIndex = Math.floor(cards.length / CARDS_PER_PAGE) * CARDS_PER_PAGE;

  // Handles sliding right
  const handleNext = () => {
    if (currentIndex < maxIndex - CARDS_PER_PAGE) {
      setCurrentIndex(currentIndex + CARDS_PER_PAGE);
    }
  };

  // Handles sliding left
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - CARDS_PER_PAGE);
    }
  };

  return (
    <div className="slider-container">
      {/* Left Slide Button */}
      {currentIndex > 0 && (
        <button className="slider-btn slider-btn-left" onClick={handlePrev}>
          ‹
        </button>
      )}

      {/* Display cards based on currentIndex */}
      {cards.slice(currentIndex, currentIndex + CARDS_PER_PAGE).map((card) => (
        <div className="card" key={card.id}>
          <h3>{card.title}</h3>
        </div>
      ))}

      {/* Right Slide Button */}
      {currentIndex < maxIndex - CARDS_PER_PAGE && (
        <button className="slider-btn slider-btn-right" onClick={handleNext}>
          ›
        </button>
      )}
    </div>
  );
};

export default CardSlider;
