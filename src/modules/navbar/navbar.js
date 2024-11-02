import styles from "./navbar.module.css";
import Logo from "../../static/images/Logo.png"
import Cart from "../../static/images/market.png"
import Login from "../../static/images/user-interface.png"
import { useAppSelector } from "../../redux/store";
import { color } from "@mui/system";

export default function Home() {

  const cartItems = useAppSelector((state) => state.cart.items);
  const username = useAppSelector((state) => state.login.value.username)

  let cartCount = 0;
  cartItems.forEach(item => {
    cartCount += item.quantity;
  });

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="/">
        <img 
        src={Logo}
        className={styles.navImg}
        alt='Logo'>
        </img>
        </a>
      </div>
      <div className={styles.navLinks}>
        <a href='/'>Home</a>
        <a href='/Store'>Shop Now</a>
        <a href='/Categories'>Categories</a>
        <a href='/AboutUs'>About Us</a>
        <a href='/ContactUs'>Contact Us</a>
      </div>
      <div className={styles.login}>
        <div style={{ position: 'relative' }}>
          <a href="/Cart">
          <img 
          src={Cart}
          alt='Logo' />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '50%',
              padding: '5px 10px',
              fontSize: '12px',
            }}>
          {cartCount}
            </span>
          )} 
          </a>
        </div>
        {username !== "" ? <a href="/Login" className={styles.username}> <h2>{username}</h2> </a>: <a href="/Login">
          <img 
          src={Login}
          alt='Logo'>
          </img>
        </a>}
      </div>
    </div>
  );
}
