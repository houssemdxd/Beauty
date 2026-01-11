import React from 'react'
import styles from "./Card.module.css"
import Button from './Button'
export default function Card({title , content}) {
  return (
    <div className={styles.card}>
        <h3 className={styles.titlestyle}>{title}</h3>
      <p className={styles.contentStyle}>{content}</p>

          <Button className={styles.mt} >Read more</Button>
    </div>
  )
}
