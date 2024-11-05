import React from 'react';
import NavBar from "../../modules/navbar/navbar";
import StoreItems from "../../data/products.json"
import StoreItem  from "../../components/StoreItem/storeItem"
import { Grid2 } from '@mui/material';
import styles from "./store.module.css";
import Footer from '../../modules/footer/footer';

export default function page() {
  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        {StoreItems.map(item => (
          <Grid2 size={3}>
            <StoreItem {...item} key={item.id} /> 
          </Grid2>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
