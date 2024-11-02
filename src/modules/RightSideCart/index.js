import React from 'react'
import styles from "./style.module.css";
import { useAppSelector } from '../../redux/store';

function Index() {
  
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const totalPrice = () => {
  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity;
  });
  return total===0?0:total+4;
};

  return (
    <div className={styles.Container}>
      <h3>Your Order:</h3>
      <ul className={styles.list}>
          {cartItems.map(item => (
            <li key={item.id}>
            <img src={item.image} alt='Item Id: {item.id}' height={100} width={100}></img> 
            <p>Name: {item.name} x {item.quantity} </p>
          </li>
          ))}
      </ul>
      <h3>Total: {totalPrice()}$</h3>
    </div>

  )
}

export default Index