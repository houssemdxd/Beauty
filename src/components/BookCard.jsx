import React from 'react'
import styles from './BookCard.Module.css'
import HeadingSection from './HeadingSection'
import Button from './Button'
export default function BookCard() {
const title ="Make Stilo Your Number One Choice"
const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la."

  return (
    <div className={styles.bookCard}>
            <div className={styles.item}>

                <h2>{title}</h2>           
                <p>{content}</p>
                <Button>Book AN  APPOINTMENT </Button>
            </div>

            <div className={`${styles.item} ${styles.second}`}>


            </div>

    </div>
  )
}
