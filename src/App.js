import './App.css';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store"; 
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Landing from "./pages/Landing/landing.js"
import Cart from './pages/Cart/cart';
import Product from './pages/Product/product.js';
import Category from './pages/Category/category.js';
import Categories from './pages/Categories/categories.js';
import Store from './pages/Store/store.js';
import Login from './pages/Login/login.js';
import Checkout from './pages/Checkout/checkout.js';
import ContactForm from './pages/ContactUs/contact.js';
import AboutUs from './pages/AboutUs/aboutus.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='/Product' element={<Product />} />
              <Route path='/Category' element={<Category />} />
              <Route path='/Categories' element={<Categories />} />
              <Route path='/Store' element={<Store />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Checkout' element={<Checkout />} />
              <Route path='/Contact-Us' element={<ContactForm />} />
              <Route path='/About-Us' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </div>
);
}
export default App;
