import React from 'react'
import styles from "../css/Main2.module.css"
import { CircleQuestionMark, Clock, Smartphone } from 'lucide-react'

const Main2 = () => {
  return (
    <div className={styles.main2}>
      <h2>Bridging Healthcare <span className={styles.com}>Communities</span></h2>
      <p className={styles.para2}>CareConnect is a revolutionary digital healthcare platform that bridges the gap between
families in need of care and trusted, verified caregivers. Whether you're an elderly patient, a
recovering individual, or a caregiver seeking meaningful opportunities, CareConnect
empowers you with trust, safety, and unparalleled ease of access to quality healthcare
services.</p>
    <div className={styles.home}>
        <div className={styles.homeimg}>
            <div className={styles.img}>
            <img src="./Background+Shadow.png" alt="/" height="100%" width="100%"/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.features}>
                <span className={styles.logo}>
                <CircleQuestionMark color="white"/>
                </span>
                <div className={styles.text}>
                    <h4>Verified Trust Network</h4>
                    <p className={styles.text}>Every caregiver undergoes rigorous background checks,
                       skill assessments, and continuous monitoring to ensure
                       the highest standards of care and safety for your loved
                    ones.</p>
                </div>
            </div>
             <div className={styles.features}>
                <span className={styles.logo1}>
                <Clock color="white"/>
                </span>
                <div className={styles.text}>
                    <h4>24/7 Availability</h4>
                    <p>Access quality healthcare services round the clock with
                        our extensive network of caregivers available for
                       emergency, routine, and specialized care needs.
                       </p>
                </div>
            </div>
              <div className={styles.features}>
                <span className={styles.logo2}>
                <Smartphone color="white"/>
                </span>
                <div className={styles.text}>
                    <h4>Seamless Technology</h4>
                    <p>Our intuitive platform combines cutting-edge technology
with human-centered design to make healthcare
accessible, affordable, and efficient for everyone.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main2
