import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contactus() {
  return (
    <>
      <div className="flex h-full max-md:flex-col">
        <div className="w-3/6 flex flex-col max-md:w-full">
          <div className="w-4/6 flex flex-col   m-auto max-md:w-full p-3">
            <h2 className=" text-4xl max-sm:text-3xl">Join With Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              aperiam.
            </p>
          </div>
        </div>

        <div className="w-3/6 m-auto max-md:w-full">
          <div className="relative p-4">
            <label htmlFor="email"></label>
            <input
              className=" text-gray-600 border-2 border-solid border-red-500 rounded-md relative "
              type="email"
              value="enter your email"
              required
            />
            <button className="absolute  w-9  bg-red-600 rounded-md text-white">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
