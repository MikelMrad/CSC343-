import React from 'react'
import Navbar from '../../modules/navbar/navbar'
import Footer from '../../modules/footer/footer'
import Banner from '../../modules/banner/banner'
import { Grid2 } from '@mui/material';
import StoreItem from '../../components/StoreItem/storeItem';
import Products from '../../data/products.json'
import styles from './landing.module.css'

export default function landing() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div className={styles.container}>
        {Products.map(item => (
            <StoreItem {...item}/>
        ))}
        </div>
      <Footer/>
    </div>
  )
}
