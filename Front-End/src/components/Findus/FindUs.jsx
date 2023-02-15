import images from "../../constants/images";
import React from 'react';
import { SubHeading } from "../../components";
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import "./FindUs.css";
const FindUs = () => (
  <div className='app-bg app-wrapper section-padding' id="contact">
    <div className='app-wrapper-info'>
      <h1 className="headtext-cormorant" >Find Us</h1>
      <div className="app-wrapper-content">
        <p className="p-opensans">Adress: xxxxx xxxx xxxx Montreal QC</p>
        <p className="p-cormorant" >open Hours</p>
        <p className="p-opensans">Mon-Fri 06:00am - 01:00am</p>
        <p className="p-opensans">Sat-Sun 07:00am - 01:00am</p>
        <p className="p-opensans">(514) 1234 5678</p>
        <p className="p-opensans">info@example.com</p>
        <p className="p-opensans">www.example.ca</p>
      </div>
      <div className="app-links-icons">
        < FiFacebook/>
        < FiTwitter/>
        < FiInstagram/>
      </div>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);



export default FindUs;

