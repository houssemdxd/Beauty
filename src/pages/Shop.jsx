/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import items from "../data/Product.json";
import ProductList from '../components/shop/ProductList';
import { Outlet } from 'react-router';

export default function Shop() {
  

  return (
    <div>
      
 <NavBar />
<Outlet />      
      </div>
  )
}
