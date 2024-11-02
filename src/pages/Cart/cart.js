import React from 'react'
import NavBar from "../../modules/navbar/navbar";
import styles from "./cart.module.css";
import { useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../redux/features/cartSlice';
import { useAppSelector } from '../../redux/store';
import Footer from '../../modules/footer/footer';

export default function Cart() {

  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };
  

  return (
    <div className={styles.Container}>
      <NavBar/>
      <div className={styles.innerContainer}>
        <div>
        <h2>Your Cart</h2>
        <h2>Total: {totalPrice()}$</h2>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className={styles.list}>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt='Item Id: {item.id}' height={100} width={100}></img> 
                <p>Name: {item.name} x {item.quantity} </p>
                <button 
                onClick={() => handleRemoveItem(item.id)}
                style={{
                  marginLeft: "10px",
                }}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleClearCart}>Clear Cart</button>
        <div className={styles.btnsContainer}>
          <div className={styles.NavBtns}>
            <a href='/'>
              <h1>Continue Shopping</h1>
            </a>
            {cartItems.length === 0 ? (
              <p></p>):(
                <a href='/Checkout'>
                <h1>Checkout</h1>
              </a>)}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
