//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav_bar from './Authentication/Nav/Nav_bar';
import Hamburger from 'hamburger-react';
import Home_compo from './Home_Component/Home_compo';

function App() {
  
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Home_compo/>} />
        <Route path="/" element={<Home_compo/>} />
              {/* <Route path="/app/ContactUs" element={</>} /> */}
      </Routes>
    </Router>
  
    </>
  )
}

export default App;
