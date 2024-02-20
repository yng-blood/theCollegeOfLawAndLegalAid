import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Autcss.css'

const Nav = ({handle_click}) => {
  const clk =()=>{
  handle_click()
}
  return (
    <nav onClick={clk}>
     
     <ul className="navbar" style={{ listStyleType: "none", color: "black" }}>
        <li className='Nav_tiles topcss'><Link to='/'>Home</Link></li>
        <li className='Nav_tiles'><Link to='/app/Donors_Details'>Cource Details </Link></li>
        <li className='Nav_tiles'><Link to='/app/ContactUs'>About Us</Link></li>
        <li className='Nav_tiles'><Link to='/app/ContactUs'>Contact Us</Link></li>
        <li className='Nav_tiles'><Link to='/app/ContactUs'>location</Link></li>
        {/* <li><Link to='/app/ContactUs'>Contact Us</Link></li> */}
      </ul>
    </nav>
  );
};

export default Nav;