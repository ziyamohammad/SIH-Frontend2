import React from 'react'
import styles from "../css/Workflow.module.css"
import { Bell, ChartBar, CircleQuestionMark, CreditCard, Eye, Headset, Search, UserCheck, UserCog } from 'lucide-react'

const Workflow = () => {
  return (
    <div className={styles.workflow}>
         <h2>How CareConnect <span className={styles.com}> Works</span></h2>
            <p className={styles.para2}>A seamless step-by-step process designed to connect patients with the right
                caregivers efficiently and securely.</p> 
    <div className={styles.five}>
              <div className={styles.features}>
                <span className={styles.logo}>
                <UserCheck size="24px" color="white"/>
                </span>
                <div className={styles.both}>
                    <h4>1.Patient Registration</h4>
                    <p className={styles.text}>
                        Patients sign up and provide their care requirements,location, and preferences through our secure platform.
                    </p>
                </div>
            </div>
             <div className={styles.features}>
                <span className={styles.logo1}>
                <Search  size="24px" color="white"/>
                </span>
                <div className={styles.both}>
                    <h4>2.Browse Caregivers</h4>
                    <p className={styles.text}>
                        Patients explore verified caregiver profiles with detailed information, ratings,and availability.
                    </p>
                </div>
            </div>
             <div className={styles.features}>
                <span className={styles.logo2}>
                <CircleQuestionMark size="24px" color="white"/>
                </span>
                <div className={styles.both}>
                    <h4>3.Verification Process</h4>
                    <p className={styles.text}>
                        All caregivers undergo comprehensive background checks, skill assessments, and document verification.</p>
                </div>
            </div>
             <div className={styles.features}>
                <span className={styles.logo3}>
                <CreditCard size="24px" color="white"/>
                </span>
                <div className={styles.both}>
                    <h4>4.Secure Payment</h4>
                    <p className={styles.text}>
                        Payments are processed securely through our encrypted gateway with transparent pricing.
                    </p>
                </div>
            </div>
             <div className={styles.features}>
                <span className={styles.logo4}>
                <Bell size="24px" color="white"/>
                </span>
                <div className={styles.both}>
                    <h4>5.Smart Notifications</h4>
                    <p className={styles.text}>
                       Both parties receive instant notifications with booking details, contact information, and care instructions.
                    </p>
                </div>
            </div>
            
        </div>
        <div className={styles.admin}>
            <div className={styles.lucideicon}>
               <UserCog color="white" size="30px" fill="white"/>
            </div>
            <h2 className={styles.head}>Administrative Oversight</h2>
            <p className={styles.para2}>Our dedicated admin team continuously monitors all transactions, maintains quality standards, and ensures trust verification throughout the entire process.</p>
            <div className={styles.three}>
                <div className={styles.features1}>
                <span className={styles.logo5}>
                <Eye size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>24/7 Monitoring</h4>
                    <p className={styles.text}>
                        Continuous oversight of all platform activities
                    </p>
                </div>
            </div>
            <div className={styles.features1}>
                <span className={styles.logo6}>
                <ChartBar size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>Quality Analytics</h4>
                    <p className={styles.text}>
                        Data-driven insights for service improvement
                        </p>
                </div>
            </div>
            <div className={styles.features1}>
                <span className={styles.logo7}>
                <Headset size="24px" color="white"/>
                </span>
                <div className={styles.both1}>
                    <h4>Support Team</h4>
                    <p className={styles.text}>
                        Dedicated support for all users
                    </p>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Workflow
