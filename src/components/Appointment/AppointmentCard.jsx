import React from 'react'
import  styles from "./AppointemntCard.module.css" 

 export default function AppointmentCard({item,id,onSelect,selectedKey}) {


const duration = "1 hour"


  return (
    <div className={`${id ===selectedKey ? styles.checked:""} ${styles.appointmentCard}`}  onClick={()=>{onSelect(id)}}  >

<input type="radio" name='type'  checked = {id ===selectedKey}  /> <label htmlFor="">{item}</label>


<p>{duration}</p>

    </div>
  )
}
