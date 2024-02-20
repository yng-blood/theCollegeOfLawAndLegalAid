import React from 'react';
import { ImCompass2 } from 'react-icons/im';

const Blank = () => {
  return (
    <div className='Blank'>
      <ul className="navbar" style={{ listStyleType: "none", color: "black", display: "flex", marginLeft: "90px" }}>
        <li className='Nav_tiles'>
          Gallery
        </li>
        <li className='Nav_tiles' style={{ width: "190px", flexWrap: "wrap" }}>
    Contacts
        </li>
      </ul>
    </div>
  );
};

export default Blank;
