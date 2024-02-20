import React, { useState } from 'react'
import Nav_bar from '../Authentication/Nav/Nav_bar'
import HomeGird from './HomeGird'
import { Link } from 'react-router-dom';

const Home_compo = () => {
  const [displayed,setdisplay]=useState(false);

  const handle_click=()=>{
    setdisplay(!displayed)
  }
 
      return (
    <div>
        <Nav_bar  displayed={displayed} handle_click={handle_click} />
        <HomeGird />
        <Link className='Enq_Now'> <p className='firsttext'> Enquire Now </p></Link>
    </div>
  )
}

export default Home_compo