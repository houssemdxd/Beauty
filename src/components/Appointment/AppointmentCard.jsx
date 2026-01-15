import React from 'react'
import  styles from "./AppointemntCard.module.css" 

 export default function AppointmentCard() {

const content = "initial tax consultaion "
const duration = "1 hour"


  return (
    <div className={styles.appointmentCard}>

<input type="radio" name='type' /> <label htmlFor="">{content}</label>
<p>{duration}</p>

    </div>
  )
}
