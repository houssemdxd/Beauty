import React from 'react'
import styles from "./Appointment.module.css"
import CalendarComponent from './CalendarComponent'
import AppointmentCard from './AppointmentCard'
import AppointmentTypeList from './AppointmentTypeList'

export default function Appointemnt() {
  return (

<div className={styles.appointemnt}>
<div className = {styles.appointemntType}>

<AppointmentTypeList/>

</div>
<CalendarComponent/>







</div>


  )
}
