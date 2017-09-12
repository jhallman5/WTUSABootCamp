/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to={'/dashboard'}>Dashboard</Link>
    <section className="hero" >
      <img src={"/images/splash.jpg"}  style={{ width:"100vw", height:"100vh"}}  />
  </section>
  </div>
);

export default Home;
