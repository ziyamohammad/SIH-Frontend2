import React from 'react'
import styles from "../css/Last.module.css"
import {Bandage, BriefcaseMedical, ChartBar, Clock, Eye, Headset, Lock, Star} from 'lucide-react'


const Last = () => {
  return (
    <div className={styles.last}>
       <h1 className={styles.lasthead}>Healthcare you can trust.
<span className={styles.lastp}>Opportunities you deserve.</span></h1>
                 <p className={styles.para2}>Connecting families with verified caregivers, anytime,
                   anywhere. Experience healthcare that comes to you
                   with trust, compassion, and professional excellence.</p>
                   <div className={styles.buttons}>
                     <button className={styles.but1}><Bandage color="rgba(43, 122, 120, 1)"/>Get Started as Patient</button>
                     <button className={styles.but2}><BriefcaseMedical  color="rgba(30, 58, 95, 1)"/>Join as Caregiver</button>
                   </div>
                     <div className={styles.three}>
                <div className={styles.features1}>
                <span className={styles.logo5}>
                <Eye size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>Verified & Trusted</h4>
                    <p className={styles.text}>
                        100% Background Checked
                    </p>
                </div>
            </div>
            <div className={styles.features1}>
                <span className={styles.logo6}>
                <Clock size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>24/7 Available</h4>
                    <p className={styles.text}>
                        Round-the-Clock Support
                        </p>
                </div>
            </div>
            <div className={styles.features1}>
                <span className={styles.logo7}>
                <Lock size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>Secure Payments</h4>
                    <p className={styles.text}>
                        Encrypted & Protected
                    </p>
                </div>
            </div>
             <div className={styles.features1}>
                <span className={styles.logo7}>
                <Star size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>Top Rated</h4>
                    <p className={styles.text}>
                        4.9/5 User Rating
                    </p>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Last
