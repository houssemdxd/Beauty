import React from 'react'
import styles from "./Appointment.module.css"
import CalendarComponent from './CalendarComponent'
import AppointmentCard from './AppointmentCard'
import AppointmentTypeList from './AppointmentTypeList'
import AppointmentTime from './AppointmentTime'
export default function Appointemnt() {







const  times = ["8","9","10","11","12","13","14","15","16","17","18","19",]





  return (

<div className={styles.appointemnt}>
  
<div className = {styles.appointemntType}>

<AppointmentTypeList/>

</div>
<div className={styles.calendarLayout}>

<CalendarComponent/>



<div className={styles.time}>
{times.map((item)=>{return <AppointmentTime time={item}  />})}


</div>




</div>

</div>


  )
}
