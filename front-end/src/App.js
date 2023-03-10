import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Pedidos from './Pages/customerOrder';
import Checkout from './Pages/Checkout';
import OrderDetails from './Pages/OrderDetails';
import HomeSeller from './Pages/HomeSeller';
import SaleOrderDetails from './Pages/SellerOrderDetails';
import HomeAdmin from './Pages/HomeAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route exact path="/customer/orders" element={ <Pedidos /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/seller/orders/:id" element={ <SaleOrderDetails /> } />
        <Route exact path="/seller/orders" element={ <HomeSeller /> } />
        <Route exact path="/admin/manage" element={ <HomeAdmin /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
