import React from 'react';
import NavBar from "../../modules/navbar/navbar";
import StoreItems from "../../data/products.json"
import StoreItem  from "../../components/StoreItem/storeItem"
import { Grid2 } from '@mui/material';
import styles from "./category.module.css";
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import Footer from '../../modules/footer/footer';

export default function Category() {

  const filterCategory = useAppSelector((state) => state.category.category);

  return (
    <div>
      <NavBar/>
      <div>
        <Grid2 
        container
        spacing={6}>
        {StoreItems
        .filter(item => item.categorie === filterCategory)
        .map(item => (
          <Grid2 size={3}>
            <StoreItem {...item} key={item.id} /> 
          </Grid2>
        ))}
        </Grid2>
      </div>
      <Footer/>
    </div>
  )
}
