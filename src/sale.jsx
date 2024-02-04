import React, { useState } from 'react';

const Sale = ({ title, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const displayButtons = () => {
    if (isHovered) {
      return (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-center">Hover is working</h2>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div
        className="relative rounded-2xl min-w-20 aspect-3/4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={url}
          alt="shop"
          srcSet=""
          className="rounded-2xl hover:scale-105 transition transform duration-500"
        />
        <span className="w-10 h-5 rounded-full text-sm absolute top-4 max-sm:top-1 max-sm:right-1 right-4 bg-red-400 text-white text-center">
          New
        </span>

        {title}
        <div>
          $210.00
          <span className="line-through text-xs text-gray-400 ml-2">
            $300.00
          </span>
          {displayButtons()}
        </div>
      </div>
    </div>
  );
};

export default Sale;
