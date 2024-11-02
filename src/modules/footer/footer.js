import React from "react";
import Logo from "../../static/images/Logo.png"
import FacebookImage from "../../static/images/facebook.png";
import XImage from "../../static/images/x.png";
import InstagramImage from "../../static/images/instagram.png";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
          <a>
            <img 
            src={Logo}
            alt="Logo"
            width={200}
            id='logo'> 
            </img>
          </a>
          <div className={styles.footerSocialsContainer}>
            <a href="">
              <img 
              src={FacebookImage}
              alt="Logo"
              width={30}
              height={30}> 
              </img>
            </a>
            <a href="">
              <img 
              src={XImage}
              alt="Logo"
              width={30}
              height={30}> 
              </img>
            </a>
            <a href="">
              <img 
              src={InstagramImage}
              alt="Logo"
              width={30}
              height={30}> 
              </img>
            </a>  
          </div>
          <div className={styles.textContainer}>
            <div className={styles.rightTextContainer}>
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
