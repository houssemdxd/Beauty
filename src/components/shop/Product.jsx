/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./Product.module.css"
import { useNavigate } from 'react-router'
export default function Product({id,title,image,price,category}) {
const navigate = useNavigate();
function handleClick()
{
navigate(`${id}`)

}


  return (
    <div className={styles.product} onClick={handleClick}>
<img src={image} alt={title}/>
<div className={styles.productContent}>

<h3>{title}</h3>
<p>{category}</p>
<p className={styles.productPrice}>{price}</p>
</div>
  </div>
  )
}
