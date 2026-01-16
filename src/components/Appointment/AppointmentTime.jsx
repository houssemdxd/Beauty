import React from 'react'
import  styles from './AppointmentTime.module.css'
export default function AppointmentTime({time}) {
  return (
    <div className={styles.appointmentTime}> {time}:00 am</div>
  )
}
