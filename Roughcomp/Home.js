import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import './Autcss.css'
import Login from './Login'
import { Link } from 'react-router-dom'
import Nav from '../src/Authentication/Nav/Nav'
import Nav_bar from '../src/Authentication/Nav/Nav_bar'

const Home = (req,res) => {
  
  const imgs = process.env.img;
  return (
    <div>
   <Nav_bar/>
    
    </div>
  )
}

export default Home