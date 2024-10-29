import React from 'react';
import './footer.css';
import img from "./assets/mikelfady.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={img} alt='test' width={'250px'} height={'125px'}/>
          <h2>The Heart of Supplements</h2>
        </div>
        <div className="footer-links">
          <div>
            <h3>More SP</h3>
            <ul className='li'>
              <li>Media</li>
              <li>Events</li>
              <li>Programs</li>
              <li>Spaces</li>
              <li>Newsletters</li>
              <li>Deals</li>
              <li>Jobs in tech</li>
            </ul>
          </div>
          <div>
            <h3>About SP</h3>
            <ul className='li'>
              <li>Terms & Conditions</li>
              <li>Privacy Statement</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <ul>
            <li><i className="facebook"></i></li>
            <li><i className="instagram"></i></li>
            <li><i className="linkedin"></i></li>
            <li><i className="email"></i></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>A Financial Times company</p>
        <p>Copyright © 2024, The Best Supplements on the Market Made with &lt;3 in Lebanon.</p>
      </div>
    </footer>
  );
};

export default Footer;
