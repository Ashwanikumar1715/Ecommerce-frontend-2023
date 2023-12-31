import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../customer/pages/Homepage/Homepage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/Order/Order";
import OrderDetails from "../customer/Order/OrderDetails";
import PaymentSucces from "../customer/components/AddressCard/PaymentSucces";
import PageNotFound from "../customer/pages/Homepage/PageNotFound";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/register" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lave1One/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSucces />} />
        <Route path="*" element={<PageNotFound/>} ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
