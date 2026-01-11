import React from 'react'
import SideBar from './SideBar'
import ProductList from './ProductList'
import styles from './Layout.module.css'
export default function Layout() {


  return (
    <div className={styles.layout}>

<SideBar></SideBar>
<ProductList></ProductList>
    </div>
  )
}
