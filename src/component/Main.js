import React from 'react'
import styles from "../css/Main.module.css"
import { CalendarCheck } from 'lucide-react'

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.image}>
            <div className={styles.care}>
                <img src = "./Container.png" alt="/" height="100%" width="100%" />
            </div>
        </div>
        <div className={styles.content}>
          <h1>Trusted Care at Your <span>Doorstep</span></h1>
          <p className={styles.para}>Connecting families with verified caregivers, anytime,
            anywhere. Experience healthcare that comes to you
            with trust, compassion, and professional excellence.</p>
            <button className={styles.butt}><CalendarCheck/>Get Started</button>
        </div>
      
    </div>
  )
}

export default Main
