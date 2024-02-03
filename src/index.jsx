import { createRoot } from 'react-dom/client';
import Card from './card';
import React from 'react';
import './style.css';

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
  </>,
);
