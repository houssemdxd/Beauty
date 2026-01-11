/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./Service.module.css"
export default function Service({service}) {
  return (
    <div className={styles.serviceCard} >

      <img src={service.icon} alt="" />
      <h5>{service.title}</h5>
      <p>{service.content}</p>


    </div>
  )
}
