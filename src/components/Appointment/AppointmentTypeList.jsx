import React from 'react'
import styles from './AppointmentTypeList.module.css'
import AppointmentCard from './AppointmentCard'
export default function AppointmentTypeList() {
  return (
    <div className = {styles.appointmentTypeList}>
<AppointmentCard/>
<AppointmentCard/>
<AppointmentCard/>
<AppointmentCard/>

    </div>
  )
}
