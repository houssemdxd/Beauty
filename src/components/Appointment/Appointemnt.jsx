import {React,useState} from 'react'
import styles from "./Appointment.module.css"
import CalendarComponent from './CalendarComponent'
import AppointmentCard from './AppointmentCard'
import AppointmentTypeList from './AppointmentTypeList'
import AppointmentTime from './AppointmentTime'
export default function Appointemnt() {







const  times = ["8","9","10","11","12","13","14","15","16","17","18","19",]
const [selectedTimekey,setSelectedTimeKey] = useState()


function onChangeTime(id)
{
setSelectedTimeKey(id)
}


  return (

<div className={styles.appointemnt}>
  
<div className = {styles.appointemntType}>

<AppointmentTypeList/>

</div>
<div className={styles.calendarLayout}>

<CalendarComponent/>



<div className={styles.time}>
{times.map((item,index)=>{return <AppointmentTime selected = {selectedTimekey}   id={index}   key={index} time={item} onChange = {onChangeTime} />})}


</div>




</div>

</div>


  )
}
