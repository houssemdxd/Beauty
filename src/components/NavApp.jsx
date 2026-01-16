import React from 'react'
import { NavLink } from 'react-router'
import styles from "./NavApp.module.css"


export default function NavApp() {
  return (
    <div className={styles.navApp}>
<ul>

<li>
<NavLink to ="/">Home</NavLink>
</li>

<li>
<NavLink to ="/shop">Shop</NavLink>
</li>

<li>
<NavLink to ="/contact">Appointment</NavLink>
</li>

<li>
<NavLink to ="/blog">Blog</NavLink>
</li>

</ul>

    </div>
  )
}
