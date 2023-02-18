import React from 'react';
import './AboutUs.css';
import images from "../../../src/assets/findus.png";

export const AboutUs = () => (
<div className='app-aboutus' id="about">
  <div className='app-aboutus-content'>
    <div className='app-aboutus-content-about'>
      <h1 className='headtext-cormorant'>About Us</h1>
      <p className='p-opensans'>
        We are dedicated to providing a sustainable and convenient mode of transportation for exploring the beautiful city of Montreal. Our mission is to make cycling accessible to everyone, while promoting a healthier and greener lifestyle. Our vision is to be the go-to provider of bike rentals in Montreal, known for our high-quality bikes, exceptional customer service, and commitment to the environment. Our values include sustainability, inclusivity, and a passion for promoting healthy, active lifestyles.
      </p>
      <h1 className='headtext-cormorant'>Our History</h1>
      <p className='p-opensans'>
        Founded in [Year?], [Company Name] started for renting bikes with a mission to encourage more people to explore the city on two wheels. Over the years, we have grown into a leading provider of bicycle rentals in Montreal, with a fleet of high-quality bikes and a team of knowledgeable and friendly staff. Our success is rooted in our commitment to sustainability, inclusivity, and a passion for promoting healthy, active lifestyles. From casual riders to serious cyclists, [Company Name] has something for everyone, and we look forward to continuing our mission of making cycling accessible to all for many years to come.
      </p>
    </div>
    <div className='aboutImg'>
      <img src={images} alt="findus" />
    </div>
  </div>
</div>

);
