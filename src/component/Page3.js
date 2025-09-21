import React from 'react'
import styles from "../css/Page3.module.css"
import { Bell, BriefcaseBusiness, Check, CreditCard, GraduationCap, Search, UserCheck } from 'lucide-react'

const Page3 = () => {
  return (
    <div className={styles.page3}>
       <h2>Comprehensive<span className={styles.com}> Healthcare Solutions </span></h2>
            <p className={styles.para2}>Discover powerful features designed for patients, caregivers, and administrators
             to create a seamless healthcare ecosystem.</p>
        <h5 className={styles.user}>For Client</h5>
        <div className={styles.three}>
              <div className={styles.features}>
                <span className={styles.logo}>
                <Search color="white"/>
                </span>
                    <h4>Browse Verified Caregivers</h4>
                    <p className={styles.text}>
                        Access detailed profiles background-checked caregivers withratings, specializations, and availability in your area.
                    </p>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Advanced filtering options</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Real-time availability</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Detailed caregiver profiles</span>
            </div>
               <div className={styles.features}>
                <span className={styles.logo1}>
                <CreditCard color="white"/>
                </span>
                    <h4>Secure Payments & Booking</h4>
                    <p className={styles.text}>
                        Book services instantly with secure payment processing and transparent pricing with no hidden fees.
                    </p>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Encrypted payment gateway</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Instant booking confirmation</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Flexible payment options</span>
            </div>
               <div className={styles.features}>
                <span className={styles.logo2}>
                <Bell color="white"/>
                </span>
                    <h4>Smart Notifications</h4>
                    <p className={styles.text}>
                        Stay informed with real-time updates about appointments, caregiver arrivals, and care progress.
                    </p>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Real-time SMS & email alerts</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Care progress updates</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Emergency notifications</span>
            </div>
        </div>
           <h5 className={styles.user}>For Caregiver</h5>
        <div className={styles.three}>
              <div className={styles.features}>
                <span className={styles.logo}>
                <UserCheck color="white"/>
                </span>
                    <h4>Easy Registration & Verification</h4>
                    <p className={styles.text}>
                        Streamlined onboarding process with comprehensive verification to build trust and credibility.
                    </p>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Quick application process</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Document verification</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Background checks</span>
            </div>
               <div className={styles.features}>
                <span className={styles.logo1}>
                <BriefcaseBusiness color="white"/>
                </span>
                    <h4>Access to Quality Opportunities</h4>
                    <p className={styles.text}>
                        Connect with genuine families seeking care services with competitive compensation and flexible schedules.
                    </p>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Verified job opportunities</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Flexible scheduling</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Fair compensation</span>
            </div>
               <div className={styles.features}>
                <span className={styles.logo2}>
                <GraduationCap color="white"/>
                </span>
                    <h4>Skill-Building & Training</h4>
                    <p className={styles.text}>
                        Access continuous learning modules and certification programs to enhance your caregiving skills.
                    </p>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Online training modules</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Certification programs</span>
                    <span className={styles.tick}><Check color="rgba(60, 179, 113, 1)"/>Skill assessments</span>
            </div>
        </div>
    </div>
  )
}

export default Page3
