import React, { useState } from 'react'
import "../Authentication/Autcss.css"
import "./Home.css"
import WelcomeHome from './../Authentication/components/WelcomeHome';
import { Link } from 'react-router-dom';

const HomeGird = () => {
    const imagesLink1 =["https://media.istockphoto.com/id/182661296/photo/gavel-on-wooden-desk-with-books-as-background.jpg?s=612x612&w=0&k=20&c=sHvOcY3mmHmgTpac7rnV_l9ojaX8HNGacM7AVD8W_pA=","data:image/jpeg;base64,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" ]

    
    const objlift={
    Name:"The College of law and Legal Aid",
    Hindi:" श्री विसाहू लाल सराफ विधि महा विद्यालय शहडोल"

  }
  return (
    <div>

  <div class="full_image_section" >
  <p className='image_Parafit' >Providing Highest Level Law Education</p>
  
<div className='imageHead'>
<img src={imagesLink1[0]} style={{height:"140%",width:"100%"}}/>
</div>
 
  </div>
  
 
   
   <div class="Parent_grid_container">
   <div class="Child_grid_item">
   <img src={imagesLink1[0]}/>
   </div>
    <div class="Child_grid_item"><h1 className='Heading_text'>{objlift.Name}</h1>
    <p className='label'>what things we Promice</p>
    <ul className='label_child'>
      <li>Quality education</li>
      <li>Innovative learning</li>
      <li>Community engagement</li>
      <li>Global perspective</li>
      <li>Team collaboration</li>
      <li>Critical thinking</li>
      <li>Effective communication</li>
     
    </ul>
    </div>
    <div class="Child_grid_item">
    <div class="Child_grid_item"><h1 className='Heading_text'>`Why Choose {objlift.Name} ?`</h1>
    <p className='label'> </p>
    <ul className='label_child'>
      <li> Rigorous Academic Curriculum: Our curriculum is designed to challenge and inspire, providing a strong foundation in legal theory and practical application.</li>
      <li>Experienced Faculty: Learn from seasoned legal professionals and academics who bring real-world experience to the classroom.</li>
      <li>Cutting-Edge Facilities: Access state-of-the-art libraries, moot courtrooms, and technology-driven learning spaces that foster innovation and collaboration.</li>
      <li>Networking Opportunities: Connect with a diverse and dynamic legal community, creating valuable professional relationships that extend beyond the classroom.</li>
      
    </ul>
    </div>
    </div>
    <div class="Child_grid_item">
   <img src={imagesLink1[1]}/>
   </div>
    <div class="Child_grid_item">6</div>
    <div class="Child_grid_item">7</div>
    <div class="Child_grid_item">8</div>
    <div class="Child_grid_item">9</div>
    <div class="Child_grid_item">10</div>
    <div class="Child_grid_item">11</div>
    <div class="Child_grid_item">12</div>
  </div>
    </div>
  )
}

export default HomeGird