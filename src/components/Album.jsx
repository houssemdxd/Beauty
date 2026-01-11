/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from "./Album.module.css"
import { BrowserRouter,Routes,Route ,NavLink, Outlet} from 'react-router'
import InfoCard from './InfoCard'
export default function Album() {

const [activeTab, setActiveTab] = useState("All");
const album =[

  {
      id : 1,
      photo:"5.jpg",
      category:"Haircut"

  },
   {
      id : 2,
      photo:"9.jpg",
      category:"Dye"

  }
  ,
   {
      id : 3,
      photo:"6.jpg",
      category:"Dye"

  },
  { 
    id : 4,
      photo:"7.jpg",
      category:"Shave"

  },
    { 
    id : 5,
      photo:"8.jpg",
      category:"HairStyle"

  }
]

const [filterdItem , setFiltredItem] = useState(album)

useEffect(
function (){
console.log(activeTab)
if(activeTab == "All") {setFiltredItem(album)}
else{
setFiltredItem(album.filter((item)=>{return item.category == activeTab}))
}
}



,[activeTab]

)





function handleClick(item)
{
  setActiveTab(item)
}








  return (
    <div className={styles.container}>
            <ul>
                <li   onClick={()=>handleClick("All")} className={activeTab=="All"?styles.active :""}>All</li>
                <li    onClick={()=>handleClick("Haircut")} className={activeTab=="Haircut"?styles.active :""}>Haircut</li>
                <li   onClick={()=>handleClick("Dye")}  className={activeTab=="Dye"?styles.active :""}>Dye</li>
                <li  onClick={()=>handleClick("Shave")}     className={activeTab=="Shave"?styles.active :""}>Shave</li>
                <li  onClick={()=>handleClick("HairStyle")}    className={activeTab=="HairStyle"?styles.active :""}>HairStyle</li>


            </ul>
            <div className={styles.albumContainer }>

{filterdItem.map((item)=>{return <div key={item.id} className={styles.one}>
  <img src={item.photo} alt="" />
</div>
})}




     </div>

    </div>
  )
}
