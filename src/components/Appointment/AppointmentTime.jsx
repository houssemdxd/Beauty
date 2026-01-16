import React from 'react'
import  styles from './AppointmentTime.module.css'
export default function AppointmentTime({time,id,onChange,selected}) {
  return (
    <div className={` ${id === selected? styles.selected: " "}    ${styles.appointmentTime}`}     onClick={()=>{onChange(id)}}> {time}:00 am</div>
  )
}
