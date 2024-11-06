import React, { useState } from 'react';
import styles from "./checkout.module.css";
import RightSideCart from "../../modules/RightSideCart/index";
import { useDispatch } from 'react-redux';
import {  clearCart } from '../../redux/features/cartSlice';

export default function Page() {
  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.container}>
    <RightSideCart/>
    <div className={styles.info}>
      <form className={styles.orderForm}>
        <div className={styles.section}>
        <h2 className={styles.heading}>Email</h2>
          <input type="email" id="email" className={styles.input} placeholder="Email" />
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="news" className={styles.checkbox} />
            <label className={styles.checkboxLabel}>Email me with news and offers</label>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>Delivery</h2>
          <input type="text" placeholder="First name" className={styles.input} />
          <input type="text" placeholder="Last name" className={styles.input} />
          <input type="text" placeholder="Address" className={styles.input} />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" className={styles.input} />
          <input type="text" placeholder="City" className={styles.input} />
          <input type="text" placeholder="Postal code (optional)" className={styles.input} />
          <input type="text" placeholder="Phone" className={styles.input} />
        </div>
        <div className={styles.section}>
          <label className={styles.label}>Shipping method</label>
          <div className={styles.shippingCost}>Delivery - $4.00</div>
        </div>
        <div className={styles.section}>
          <label className={styles.label}>Payment</label>
          <select className={styles.select}>
            <option>Cash on Delivery (COD)</option>
            <option>Whish Transfer</option>
          </select>
        </div>
        <a href='/'><button type="button" className={styles.submitButton} onClick={handleClearCart}>Complete Order</button></a>
      </form>
    </div>
    </div>
  )
}
