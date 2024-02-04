import React from 'react';

function Blog({ url, title, className, classHover }) {
  return (
    <>
      <div className=" rounded-2xl flex flex-col">
        <img src={url} alt="Blog" srcset="" className=" rounded-2xl" />
        <div
          className={` cursor-pointer  w-24 text-center m-2 text-white text-sm py-1 rounded-full ${className} hover:${classHover}`}
        >
          BEAUTY
        </div>

        <h2>{title}</h2>
      </div>
    </>
  );
}

export default Blog;
