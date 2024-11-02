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
      <Grid2 
        container
        spacing={4}
        style={{marginTop:'20px'}}>
        {Products.map(item => (
          <Grid2 size={2.4} key={item.id}>
            <StoreItem {...item}/>
          </Grid2>
        ))}
        </Grid2>
      <Footer/>
    </div>
  )
}
