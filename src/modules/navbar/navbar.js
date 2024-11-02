import "./navbar.css";
import Logo from "../../static/images/Logo.png"
import Cart from "../../static/images/market.png"
import Login from "../../static/images/user-interface.png"
import { useAppSelector } from "../../redux/store";

export default function Home() {

  const cartItems = useAppSelector((state) => state.cart.items);

  let cartCount = 0;
  cartItems.forEach(item => {
    cartCount += item.quantity;
  });

  return (
    <div className='container'>
      <div className='logo'>
        <a href="/">
        <img 
        src={Logo}
        className='navImg'
        alt='Logo'>
        </img>
        </a>
      </div>
      <div className='navLinks'>
        <a href='/'>Home</a>
        <a href='/Store'>Shop Now</a>
        <a href='/Categories'>Categories</a>
        <a href='/AboutUs'>About Us</a>
        <a href='/ContactUs'>Contact Us</a>
      </div>
      <div className='login'>
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
        <a href="/Login">
          <img 
          src={Login}
          alt='Logo'>
          </img>
        </a>
      </div>
    </div>
  );
}
