import React, { useState } from 'react';
import styles from "./navbar.module.css";
import Logo from "../../static/images/Logo.png";
import Cart from "../../static/images/market.png";
import Login from "../../static/images/user-interface.png";
import { useAppSelector } from "../../redux/store";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);
  const username = useAppSelector((state) => state.login.value.username);

  let cartCount = 0;
  cartItems.forEach(item => {
    cartCount += item.quantity;
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="/">
          <img 
            src={Logo}
            className={styles.navImg}
            alt='Logo'
          />
        </a>
      </div>

      <div className={styles.burger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <a href='/'>Home</a>
        <a href='/Store'>Shop Now</a>
        <a href='/Categories'>Categories</a>
        <a href='/About-Us'>About Us</a>
        <a href='/Contact-Us'>Contact Us</a>
      </div>

      <div className={styles.login}>
        <div style={{ position: 'relative' }}>
          <a href="/Cart">
            <img 
              src={Cart}
              alt='Cart' 
            />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: '#3db4e5',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '16px',
              }}>
                {cartCount}
              </span>
            )} 
          </a>
        </div>
        {username !== "" ? (
          <a href="/Login" className={styles.username}> 
            <h2 >{username}</h2> 
          </a>
        ) : (
          <a href="/Login">
            <img 
              src={Login}
              alt='Login'
            />
          </a>
        )}
      </div>
    </div>
  );
}
