import React from 'react';
import ShopCategory from './pages/ShopCategory';
// import Cart from './Pages/Cart';

import ParentLayout from './parent layout/ParentLayout';
import banner_women from './assests/banner_women.png';
;import banner_mens from './assests/banner_mens.png';
import banner_kids from './assests/banner_kids.png';
import Login from './Pages/Login';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Shop from './pages/Shop';
import ShopContextProvider from './context/ShopContext';
import CartItems from './pages/cart items/CartItems';


function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
      
        <Routes>

        {/* Layout */}
        <Route path="/" element={<ParentLayout />}>
          
          {/* الصفحة الرئيسية*/}.
          <Route path="shop" index element={<Shop />} />

          {/* صفحات الأقسام */}
          <Route path="mens" element={<ShopCategory banner={banner_mens}category="men" />} />
          <Route path="womens" element={<ShopCategory banner={banner_women}category="women" />} />
          <Route path="kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="cart" element={<CartItems/>} />
          <Route path="login" element={<Login />} />

        </Route>

      </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;