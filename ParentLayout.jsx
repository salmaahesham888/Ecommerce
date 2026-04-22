import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ShopContextProvider from "../context/ShopContext";

export default function ParentLayout() {
  return (
    <>
      <Navbar />
            <ShopContextProvider>


      <Outlet />
            </ShopContextProvider>
      <Footer />
    </>
  );
}