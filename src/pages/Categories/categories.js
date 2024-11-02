import React from 'react';
import NavBar from "../../modules/navbar/navbar";
import categories from "../../data/categories.json"
import styles from "./categories.module.css";
import { useDispatch } from 'react-redux';
import { Card, CardContent ,CardHeader ,CardMedia} from '@mui/material';
import { setFilterCategory } from '../../redux/features/categorySlice';
import Footer from '../../modules/footer/footer';


export default function Categories() {
  const dispatch = useDispatch();
  const handleFilterChange = (category) => {
    dispatch(setFilterCategory(category));
  };

  
  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        <h1> Categories</h1>
        <div className={styles.cardContainer}>
        {categories.map((category) => (
          <a href='Category' onClick={() =>handleFilterChange(category.id)}>
            <Card className={styles.card}>
            <CardHeader title={category.label}/>
            <CardMedia
              component="img"
              alt="Product Image"
              image={category.icon}
            />
            <CardContent>
              <p>Shop {category.label}.</p>
            </CardContent>
            </Card>
          </a>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}