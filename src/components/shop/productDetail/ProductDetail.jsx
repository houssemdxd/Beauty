/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import styles from "./ProductDetail.module.css"
import { useParams } from 'react-router'
import { useProduct } from '../../../ApiContext/ProductContext'

export default function ProductDetail() {
const params= useParams()
const {id} = params
const {product} = useProduct()
console.log(params)
console.log("---------------------------------------------")
const item = product.filter((element)=>{return element.id==id})
console.log("[id] ",id)
console.log("[product] ",product)
console.log("[item] ",item)
  return (
    <div className={styles.productDetail}>


    </div>
  )
}
