import React, { useState } from 'react'
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import Blank from './Blank';
const Nav_bar = ({handle_click ,displayed}) => {
  
 
  return (
    <div>
        <button className='Nav_tiles ics' onClick={handle_click}>
        <Hamburger size={20} color="white" direction="right" toggled={displayed} style={{right:"14px"}} speed={90}   timingFunction="ease"/>
      </button>
        {displayed ? <Nav handle_click={handle_click} /> : <Blank/>}
    </div>
  )
}

export default Nav_bar