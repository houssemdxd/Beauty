/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './AppointmentTypeList.module.css'
import AppointmentCard from './AppointmentCard'
export default function AppointmentTypeList() {



const AppoitmentsTypes = ["first text ","second text ","third text ","fourth text "]
const [selecetdItem,setSelelectedItem] = useState("");



function onSelect(key)
{
  console.log("element with key ",key , "is likced")

  setSelelectedItem(key)
}


  return (


    <div className ={styles.appoinmentListContainer}>

    <div className = {styles.appointmentTypeList}>

      {AppoitmentsTypes.map((item,index)=>{ return   <AppointmentCard id={index} key={index} item ={item} onSelect = {onSelect}  selectedKey={selecetdItem} />})}
  


    </div>
    </div>
  )
}
