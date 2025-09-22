import React from 'react'
import styles from "../css/Auth.module.css"
import { BriefcaseMedical, SquareActivity, UserCog } from 'lucide-react'

const Auth = () => {
  return (
    <div className={styles.auth}>
       <h2 className={styles.head1}>Join Our<span> Healthcare Community </span></h2>
                <p className={styles.para2}>Choose your role and get started with CareConnect today. Whether you're seeking care, providing care, or managing the platform, we have the perfect solution for you.</p>
        <div className={styles.three}>
            <div className={styles.admin}>
                <div className={styles.lucideicon}>
               <UserCog color="white" size="30px" fill="white"/>
            </div>
            <h2 className={styles.head}>Admin Portal</h2>
            <p className={styles.para3}>Secure access with role-based authentication</p>
            <form>
                <div className={styles.name}>
                    <label>Admin Email</label>
                    <input type="text" className={styles.name1} placeholder="admin@careconnect.com"/>
                </div>
                <div className={styles.name}>
                    <label>Password</label>
                    <input type="text" className={styles.name1} placeholder="......."/>
                </div>
                <div className={styles.remember}>
                    <div className={styles.rem}>
                    <input type="checkbox" />
                    <label>Remember me</label>
                    </div>
                    Forgot password?
                </div>
                <button className={styles.adminbut}>Access Admin Portal</button>
            </form>
            </div>
             <div className={styles.admin1}>
                <div className={styles.lucideicon1}>
               <SquareActivity color="white" size="30px" />
            </div>
            <h2 className={styles.head}>Caregiver Portal</h2>
            <p className={styles.para3}>Join our network of professional caregivers</p>
            <form>
                <div className={styles.name}>
                    <label>Admin Email</label>
                    <input type="text" className={styles.name1} placeholder="admin@careconnect.com"/>
                </div>
                <div className={styles.name}>
                    <label>Password</label>
                    <input type="text" className={styles.name1} placeholder="......."/>
                </div>
                <div className={styles.remember}>
                    <div className={styles.rem}>
                    <input type="checkbox" />
                    <label>Remember me</label>
                    </div>
                    Forgot password?
                </div>
                <button className={styles.adminbut1}>Access Admin Portal</button>
            </form>
            </div>
             <div className={styles.admin2}>
                <div className={styles.lucideicon2}>
               <BriefcaseMedical color="white" size="30px" />
            </div>
            <h2 className={styles.head}>Admin Portal</h2>
            <p className={styles.para3}>Secure access with role-based authentication</p>
            <form>
                <div className={styles.name}>
                    <label>Admin Email</label>
                    <input type="text" className={styles.name1} placeholder="admin@careconnect.com"/>
                </div>
                <div className={styles.name}>
                    <label>Password</label>
                    <input type="text" className={styles.name1} placeholder="......."/>
                </div>
                <div className={styles.remember}>
                    <div className={styles.rem}>
                    <input type="checkbox" />
                    <label>Remember me</label>
                    </div>
                    Forgot password?
                </div>
                <button className={styles.adminbut2}>Access Admin Portal</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Auth
