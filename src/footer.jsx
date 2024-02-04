import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const icons = [
    {
      icon: faTwitter,
    },
    {
      icon: faFacebook,
    },
    {
      icon: faInstagram,
    },
  ];
  const footer = [
    {
      title: 'Blog',
    },
    {
      title: 'FAQs',
    },
    {
      title: 'Contact',
    },
    {
      title: 'Privacy',
    },
    {
      title: 'Login',
    },
    {
      title: 'Shop',
    },
    {
      title: 'My Account',
    },
    {
      title: 'About Us',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 py-11 gap-10 max-md:grid-cols-1">
        <div>
          <img
            src="https://htmldemo.net/brancy/brancy/assets/images/logo.webp"
            alt="brancy"
          />
          <p className="text-xs text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fugit suscipit, cumque rem ab at odio. Voluptatum, rem.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Information</h2>
          <ul className="grid grid-cols-3 pr-4 text-xs justify-between text-gray-600">
            {footer.map((item, index) => (
              <li key={index} className="py-2 pr-4">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Social Info</h2>
          <ul className="grid grid-cols-3 pr-4">
            {icons.map((item, index) => (
              <li key={index} className="py-2 pr-4">
                <FontAwesomeIcon icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
