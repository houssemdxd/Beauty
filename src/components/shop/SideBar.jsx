import React from 'react'
import styles from './SideBar.module.css'
import { useProduct } from '../../ApiContext/ProductContext'


export default function SideBar() {
const {handleClick,category} = useProduct()



  return (
    <div className={styles.sideBar}>
        <h4>Category</h4>
        <ul>    
                    <li><input type="checkbox"  checked ={category.includes("All")} value ="All" onClick={(e)=>handleClick(e)}  /> All </li>

        <li><input type="checkbox"  value ="Hair Care" onClick={(e)=>handleClick(e)} /> HairStyle </li>
        <li><input type="checkbox" value = "Styling"  onClick={(e)=>handleClick(e)}  /> Styling </li>
        <li><input type="checkbox" value = "Coloring" onClick={(e)=>handleClick(e)}  /> Coloring </li>
        <li><input type="checkbox" value = "Tools"  onClick={(e)=>handleClick(e)}  /> Tools</li>
         <li><input type="checkbox" value = "Accessories"  onClick={(e)=>handleClick(e)} /> Accesoires </li>



        </ul>
    </div>
  )
}
