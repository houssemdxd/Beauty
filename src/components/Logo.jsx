import React from 'react'
import styles from "./Logo.module.css"
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to="/">    <h2 className= {styles.logo}>Beauty .</h2></Link>

  )
}
