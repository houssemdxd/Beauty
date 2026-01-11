import React from 'react'
import styles from "./HeadingSection.module.css"



export default function HeadingSection({title , content }) {
  return (
    <div className={styles.headingSection }>
<h2>{title}</h2>
<p>{content}</p>
    </div>
  )
}
