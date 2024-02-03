import React from 'react';
import './style.css';

const Card = ({ url, title, className, badges }) => {
  const displaybadges = () => {
    switch (badges) {
      case 'New':
        return (className = 'bg-[#ff6565]');

      case 'Sale':
        return (className = 'bg-[#835BF4]');

      default:
        return null;
    }
  };
  return (
    <>
      <div
        className={`flex flex-col min-w-20 lg:aspect-3/4 max-sm:aspect-3/4 aspect-4/3 justify-center items-center rounded-2xl relative ${className} `}
      >
        <img
          src={url}
          alt="icon"
          srcset=""
          width={70}
          height={70}
          className=" pb-5 rotate-y-0-hover "
        />
        <div className="h-1 w-6 bg-red-500 m-2 rounded-full"></div>
        <h2>{title}</h2>
        {/* {badges && (
          <span className="absolute h-7 text-white bg-red-400 w-16 text-center rounded-full top-0 right-0 -rotate-90">
            {badges}
          </span>
        )} */}

        <span
          className={`absolute h-7 ${displaybadges()} w-16 text-center rounded-full top-0 right-0 max-lg:top-2 max-lg:right-2 text-white  -rotate-90 max-lg:rotate-0 max-lg:h-4 max-lg:w-10 text-xs`}
        >
          {badges}
        </span>
      </div>
    </>
  );
};

export default Card;
