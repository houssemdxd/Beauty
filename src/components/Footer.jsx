import React from 'react'
import styles from "./Footer.module.css"
import Logo from './Logo'
import HeadingSection from './HeadingSection'

export default function Footer() {

const title = "Opening times"


  return (
    <div className = {styles.footerStyle}>

            <div className={styles.item}>
<Logo></Logo>               
 <p>We would love to serve you and let you enjoy your culinary experience. Excepteur sint occaecat cupidatat non proident.</p>

                    <p>Copyright ©2026 All rights reserved | This template is made with  by Colorlib</p>

            </div>
            <div className={styles.item}>
                <h4>{title}</h4>
                <p>Monday: Friday: 10.00 - 23.00</p>
                <p>Saturday: 10.00 - 19.00</p>
                <div className={styles.socialInfo}>

                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-google-plus"></i>
                    <i class="fa fa-instagram"></i>


                </div>
            </div>

            <div className={styles.item}>

                    <h4>Contact</h4>
                <p>Tel: (+12) 345 678 910</p>
                <p>E-mail: Hello.colorlib@gmail.com</p>
                <p>Address: Iris Watson, P.O. Box 283</p>
                <p>8562 Fusce Rd, NY</p>

            </div>

    </div>
  )
}
