import { createRoot } from 'react-dom/client';
import Card from './card';
import React from 'react';
import './style.css';
import Blog from './blog';
import Sale from './sale';
import Contactus from './contactus';
import './style.css';
import Footer from './footer';

const cards = [
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/category/1.webp',
    title: 'Hare Care',
    className: 'bg-[#dcffd2]',
    badges: 'New',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/category/2.webp',
    title: 'Skin Care',
    className: ' bg-[#fffdb4]',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/category/3.webp',
    title: 'Lip Stick',
    className: 'bg-[#DFE4FF]',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/category/4.webp',
    title: 'Face Skin',
    className: 'bg-[#FFEACC]',
    badges: 'Sale',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/category/5.webp',
    title: 'Blusher',
    className: ' bg-[#FFDAE0]',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/category/6.webp',
    title: 'Natural',
    className: 'bg-[#FFEACC]',
  },
];

const topsales = [
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/1.webp',
    title: 'Readable Content Dx22',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/2.webp',
    title: 'Modern Eye Brush',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/3.webp',
    title: 'Voyage face Clener',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/4.webp',
    title: 'Impulse Duffle',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/5.webp',
    title: 'Sprite Yoga Strapes1',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/shop/6.webp',
    title: 'Fusion facial Cream',
  },
];

const blog = [
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/blog/1.webp',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    className: 'bg-[#FF9C9C]',
    classHover: 'bg-red-500',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/blog/2.webp',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    className: 'bg-[#A49CFF]',
    classHover: 'bg-purple-600',
  },
  {
    url: 'https://htmldemo.net/brancy/brancy/assets/images/blog/3.webp',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    className: 'bg-[#9cdbff]',
    classHover: 'bg-cyan-500',
  },
];

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <>
    <div className="mt-9 grid grid-cols-6 flex-shrink-0 gap-1 mx-auto w-9/12 max-sm:w-11/12 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2  flex-wrap ">
      {cards.map(x => (
        <Card
          title={x.title}
          url={x.url}
          className={x.className}
          badges={x.badges}
        />
      ))}
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-2 max-sm:w-11/12  gap-1 w-9/12 mx-auto justify-center ">
      {topsales.map(x => (
        <Sale title={x.title} url={x.url} />
      ))}
    </div>

    <div className="grid lg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 max-sm:w-11/12  gap-1 w-9/12 mx-auto justify-center ">
      {blog.map(x => (
        <Blog
          title={x.title}
          url={x.url}
          className={x.className}
          classHover={x.classHover}
        />
      ))}
    </div>

    <div className=" w-9/12 max-sm:w-11/12 object-cover overflow-hidden rounded-2xl  mx-auto contactUs">
      <Contactus />
    </div>

    <div className=" bg-gray-100">
      <div className="w-9/12 max-sm:w-11/12 mx-auto">
        <Footer />
      </div>
    </div>
  </>,
);
