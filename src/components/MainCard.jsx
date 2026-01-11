import React from 'react'
import styles from './MainCard.module.css' ;

export default function MainCard() {
  return (
    <div className={styles.mainCard}>
        <div className={styles.subtitle}>
        <div>
        <h1>Bringing Out The<br/>
        Beauty In You </h1>
        </div>
        <p>"Lorem ipsum dolor . Consequatur quod exercit  eum nesciunt ad<br/>
       Lorem ipsum dolor . Consequatur quod exercit  eum nesciunt adipisci, inventore eligendi harum voluptatem!"</p>


                <button className= {styles.discoverButton}> Discover Now </button>
        </div>
        <div>
            <img src="main.png" alt="" />
        </div>
            </div>
  )
}
