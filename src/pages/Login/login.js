'use client'
import React from 'react';
import styles from "./login.module.css";
import Logo from "../../static/images/Logo.png"
import { useState } from 'react';
import { logIn , logOut } from "../../redux/features/loginSlice"
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../../redux/store';
import Footer from '../../modules/footer/footer';
import Navbar from '../../modules/navbar/navbar'


export default function Login (){

  const dispatch = useDispatch();

  const username = useAppSelector((state) => state.login.value.username);

  const [userFname , setUserFname] = useState("");
  const [userLname , setUserLname] = useState("");
  const [email , setEmail] = useState("");
  const [birthday , setBirthday] = useState("");

  const onclickLogIn = () => {
    const actionPayload = {
      username: userFname + " " + userLname,
      email: email,
      birthday: birthday,
    }
    dispatch(logIn(actionPayload));
  }
  const onclickLogOut = () => {
    dispatch(logOut());
  }

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.formContainer}>
      <div className={styles.form}>
        <form onSubmit={(e) => { e.preventDefault(); onclickLogIn(); }}>
          <label>First name: </label>
          <input type="text" required onChange={(e) => setUserFname(e.target.value)} /> <br /><br />
          
          <label>Last name: </label>
          <input type="text" required onChange={(e) => setUserLname(e.target.value)} /> <br /><br />
          
          <label>Email: </label>
          <input type="email" required onChange={(e) => setEmail(e.target.value)} /> <br /><br />
          
          <label>Birthday: </label>
          <input type="date" max="2023-12-31" required onChange={(e) => setBirthday(e.target.value)} /> <br /><br />

          <h4 style={{ color: 'red' }}>*All Fields Are Required</h4>
          
          <button type="submit">Register</button>
        </form>
        <button type="button" onClick={onclickLogOut}>LogOut</button>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
