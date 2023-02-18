import images from "../../../src/assets/findus.png";
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import "./FindUs.css";
export const FindUs = () => (
  <div className='app-bg app-wrapper section-padding' id="contact">
    <div className='app-wrapper-info'>
      <h1 className="headtext-cormorant" >Find Us</h1>
      <div className="app-wrapper-content">
        <p >Adress: xxxxx xxxx xxxx Montreal QC</p>
        <p >open Hours</p>
        <p >Mon-Fri 06:00am - 01:00am</p>
        <p >Sat-Sun 07:00am - 01:00am</p>
        <p >(514) 1234 5678</p>
        <p >info@example.com</p>
        <p >www.example.ca</p>
      </div>
      <div className="app-links-icons">
        < FiFacebook/>
        < FiTwitter/>
        < FiInstagram/>
      </div>
    </div>
    <div className='app-wrapper-img'>
      <img src={images} alt="findus" />
    </div>
  </div>
);





