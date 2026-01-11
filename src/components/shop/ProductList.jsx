/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./ProductList.module.css"
import Product from './Product'
import { useProduct } from '../../ApiContext/ProductContext'

export default function ProductList() {
  const {product,handleOnchange}=useProduct()
  console.log(product)
  return (


  <div className={styles.productContainer}>
    <div className={styles.search}>
    <input type="text" onChange={(e)=>handleOnchange(e)} />

    </div>
    <div className={styles.productList}>

      {product.map((item)=>{return <Product title={item.title} image={item.image} price={item.price} category={item.category} id={item.id}   />})}

    </div>
    
    </div>
  )
}
