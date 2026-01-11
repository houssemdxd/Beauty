/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Route,BrowserRouter,Routes} from "react-router" 
import Home from './pages/Home'
import Shop from "./pages/Shop"
import Blog from "./pages/Blog"
import InfoCard from './components/InfoCard'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import ProductList from './components/shop/ProductList'
import { ProductProvider } from './ApiContext/ProductContext'
import Layout from './components/shop/Layout'
import ProductDetail from './components/shop/productDetail/ProductDetail'

function App() {

  return (
    <div style={{height:"100% !important"}}>

<BrowserRouter>
<Routes>
<Route path='/'  element ={<Home></Home>}>

 </Route>

<Route path='/shop' element={ <ProductProvider><Shop/></ProductProvider> }>

<Route index element={<Layout />} />
<Route path=':id' element={<ProductDetail />} />


</Route>
<Route path='/blog' element ={<Blog></Blog>}></Route>
<Route path='/contact' element ={<Contact></Contact>}></Route>

</Routes>
</BrowserRouter>


    </div>
  )
}

export default App
