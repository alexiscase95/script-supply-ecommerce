import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./pages/home/home'));
const SearchResults = lazy(() => import('./pages/search-results/search-results'));
const ProductListing = lazy(() => import('./pages/product-listing/product-listing'));
const ProductDetails = lazy(() => import('./pages/product-details/product-details'));
const Cart = lazy(() => import('./pages/cart/cart'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const OrderConfirmation = lazy(() => import('./pages/order-confirmation/order-confirmation'));
const Login = lazy(() => import('./pages/login/login'));
const Profile = lazy(() => import('./pages/profile/profile'));

function App() {
  return (
    <Router>
      <header>
        <h1>Script Supply</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search-results">Search Results</Link></li>
            <li><Link to="/product-listing">Product Listing</Link></li>
            <li><Link to="/product-details">Product Details</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/order-confirmation">Order Confirmation</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/product-listing" element={<ProductListing />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <p>&copy; 2024 Script Supply</p>
      </footer>
    </Router>
  );
}

export default App;
