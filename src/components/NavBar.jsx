import React from 'react'
import styles from "./NavBar.module.css"
import Logo from './Logo'
import NavApp  from './NavApp'
export default function NavBar() {
  return (


<div className={styles.navBar}>
<Logo></Logo>        
<NavApp></NavApp>


    </div>



    
  )
}
