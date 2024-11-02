import React from "react";
import Logo from "../../static/images/Logo.png"
import FacebookImage from "../../static/images/facebook.png";
import XImage from "../../static/images/x.png";
import InstagramImage from "../../static/images/instagram.png";
import "./footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerContainer'>
          <a>
            <img 
            src={Logo}
            alt="Logo"
            width={150}
            id='logo'> 
            </img>
          </a>
          <div className='footerSocialsContainer'>
            <a href="">
              <img 
              src={FacebookImage}
              alt="Logo"
              width={20}
              height={20}
              className="social-image"> 
              </img>
            </a>
            <a href="">
              <img 
              src={XImage}
              alt="Logo"
              width={20}
              height={20}
              className="social-image"> 
              </img>
            </a>
            <a href="">
              <img 
              src={InstagramImage}
              alt="Logo"
              width={20}
              height={20}
              className="social-image"> 
              </img>
            </a>  
          </div>
          <div className='textContainer'>
            <div className='rightTextContainer'>
              <a href="">
                Privacy & Policies
              </a>
              <a href="/TermsAndConditions">
                Terms & Conditions
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
