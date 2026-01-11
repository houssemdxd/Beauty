/* eslint-disable no-unused-vars */
import React from 'react'
import Service from './Service'
import styles from "./ServiceList.module.css"
export default function ServiceList() {

const services =[
{
  id:1,
title : "Coloring",
content :"Ut enim ad minim veniam, quis trud exercitation...",
icon :"s1.png"

},

{
  id:2,
title : "HairCut",
content :"Consectetur adipisicing elit, sed doe eiusmod.",
icon :"s3.png"

}
,

{
  id:3,
title : "HairStyle",
content :"Nemo enim ipsam voluptatem quia voluptas",
icon :"s4.png"

}
  
,

{
  id:4,
title : "Coloring",
content :"Ut enim ad minim veniam, quis trud exercitation...",
icon :"s3.png"

}
  
]




  return (
    <div className={styles.serviceList}>

        {services.map((item)=><Service service ={item} />)}


    </div>
  )
}
