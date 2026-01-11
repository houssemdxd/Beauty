import React from 'react'
import NavApp from '../components/NavApp'
import Logo from '../components/Logo'

import MainCard from '../components/MainCard'
import NavBar from '../components/NavBar'
import InfoCard from '../components/InfoCard'
import ServiceList from '../components/ServiceList'
import HeadingSection from '../components/HeadingSection'
import Album from '../components/Album'
import styles from "./home.module.css"
import BookCard from '../components/BookCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
  <div className={styles.layout}>
<NavBar></NavBar>
    <div className={styles.mainlayout}>
    <MainCard></MainCard>
</div>
<div>
<InfoCard></InfoCard>
<center><hr  className={styles.line}/></center>

<h2 className={styles.service}>Our Service</h2>
<p>The House of Hair Salon & Spa, incididunt ut labore et dolore magna aliqua.</p>

<ServiceList></ServiceList>
<HeadingSection title="Our Work "  content="Quis nostrud exercitation ullamco labor's nisi ut aliquip ex ea commodo consequat.

"></HeadingSection>
<Album></Album>
<BookCard></BookCard>

<Footer></Footer>
</div>
    </div>
  )
}
