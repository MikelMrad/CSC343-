import React from 'react';
import styles from "./storeItem.css";
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../src/redux/features/cartSlice';
import { setFilterProduct } from '@/redux/features/productSlice';


export default function StoreItem({ id, availableQuantity, name, price, image }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, availableQuantity, name, quantity: 1, image , price }));
  };
  const handleFilterChange = (product) => {
    dispatch(setFilterProduct(product));
  };
  

  return (
    <div className={styles.container}>
      <a href='/Product' onClick={() =>handleFilterChange(id)}>
        <Card className={styles.card} key={id}>
          <CardHeader title={name} />
          <CardMedia
            component="img"
            alt="Product Image"
            image={image}
            height={300}
          />
          <CardContent>
            <p>Price: {price}$</p>
            <div className={styles.cardContent}>
              <button onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                Add To Cart
              </button>
            </div>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
