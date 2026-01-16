/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './AppointmentTypeList.module.css'
import AppointmentCard from './AppointmentCard'
export default function AppointmentTypeList() {



const AppoitmentsTypes = ["Haircut and styling is for cutting hair. ","Hair coloring is for changing color.","Hair treatment is for hair care.","Special services are for members ."]
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
