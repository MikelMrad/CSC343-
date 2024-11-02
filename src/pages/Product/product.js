import React, { useState } from 'react'
import styles from './product.module.css'
import NavBar from '../../modules/navbar/navbar'
import Footer from '../../modules/footer/footer'
import StoreItems from "../../data/products.json"
import { useAppSelector } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/features/cartSlice'

export default function Product() {
    
  const [quantity , setQuantity] = useState(0)

  const dispatch = useDispatch()
  const filterProduct = useAppSelector((state) => state.product.product)
  const cartProduct = useAppSelector((state) => state.cart.items)
  const product = StoreItems.filter(item => item.id === filterProduct)[0]
  let productInCartNumber = cartProduct.filter(item => item.id === filterProduct)[0]?.quantity ?? 0

  const removeProduct = () => {
    quantity > 0 ? setQuantity(prevQuantity => prevQuantity - 1) : alert("Quantity Can't Be Negative");
  }

  const addProduct = () => {
    quantity < product.availableQuantity - productInCartNumber ? setQuantity(prevQuantity => prevQuantity + 1) : alert("Maximum Number Reached");
  }

  const handleAddToCart = () => {
    dispatch(addItem({ id:product.id , availableQuantity:product.availableQuantity , name:product.name , quantity , image:product.image , price:product.price }));
  };
  
  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
            <img
            src={product.image}
            alt='product'
            width={500}  
            height={500}>
            </img>
        </div>
        <div className={styles.rightContainer}>
            <h1>{product.name}</h1>
            <h3>{product.price}$</h3>
            <h4>Quantity</h4>
            <div className={styles.quantity}>
              <button onClick={removeProduct}>-</button>
              <p>{quantity}</p>
              <button onClick={addProduct}>+</button>
            </div>
            <h3 className={styles.btns} onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>Add To Cart</h3>
        </div>
      </div>
      <Footer/>
    </div>
  )
}