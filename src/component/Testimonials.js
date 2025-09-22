
import styles from "../css/Testimonials.module.css"

const Testimonials = () => {
    const testi = [
        {
            src:"./img1.png",
            name:"Dr.Emily Chen",
            designation:"Regional Medical Center Director",
            content:"CareConnect has revolutionized how we approach post-discharge care.The platform's comprehensive vetting process ensures our patients receive quality care at home, reducing readmission rates and improving overall patient outcomes.It's become an essential part of our continuum of care."
        },
        {
            src:"./img2.png",
            name:"Michael Rodriguez",
            designation:"Certified Nursing Assistant",
            content:"As a caregiver in a rural area, finding consistent work was always a challenge. CareConnect opened up opportunities I never knew existed. The platform's verification process gave families confidence in my abilities, and the flexible scheduling allows me to serve my community while maintaining work-life balance."
        },
        {
            src:"./img3.png",
            name:"Sarah Johnson",
            designation:"Daughter & Primary Caregiver",
            content:"CareConnect was a lifesaver whenmy mother needed post-surgery care. The caregiver we found through the platform was not only professionally qualified but also incredibly compassionate. The peace of mind knowing that help was just a click away made all the difference during a challenging time."
        },
    ]

    const clienttesti = [
        {
            content:"The training modules helped me upgrade my skills and earn certifications that increased my earning potential. CareConnect truly invests in their caregivers' professional growth.",
            src:"./img2.png",
            name:"Michael Rodriguez",
            designation:"Certified Nursing Assistant",
        },
        {
            src:"./img1.png",
            name:"Dr.Emily Chen",
            designation:"Regional Medical Center Director",
            content:"CareConnect has revolutionized how we approach post-discharge care.The platform's comprehensive vetting process ensures our patients receive quality care at home, reducing readmission rates and improving overall patient outcomes.It's become an essential part of our continuum of care."
        },
        {
            src:"./img3.png",
            name:"Sarah Johnson",
            designation:"Daughter & Primary Caregiver",
            content:"CareConnect was a lifesaver whenmy mother needed post-surgery care. The caregiver we found through the platform was not only professionally qualified but also incredibly compassionate. The peace of mind knowing that help was just a click away made all the difference during a challenging time."
        },
    ]
  return (
    <div className={styles.testimonials}>
         <h2>Stories of <span className={styles.com}>Transformation </span></h2>
        <p className={styles.para2}>A seamless step-by-step process designed to connect patients with the right caregivers efficiently and securely.</p> 
        <div className={styles.all}>
            {testi.map((m)=>{
                return(
                    <div className={styles.testis}>
                        <div className={styles.upper}>
                            <div className={styles.img}>
                                <img src = {m.src} alt = "/" height="100%" width="100%"/>
                            </div>
                            <div className={styles.uppercontent}>
                                <h5>{m.name}</h5>
                                <span>{m.designation}</span>
                            </div>
                        </div>
                        <div className={styles.lower}>
                            <span>{m.content}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={styles.clienttesti}>
            <h4>More Success Stories</h4>
            <div className={styles.all}>
              {clienttesti.map((m)=>{
                return(
                    <div className={styles.testis1}>
                        <div className={styles.upper1}>
                            <div className={styles.img}>
                                <img src = {m.src} alt = "/" height="100%" width="100%"/>
                            </div>
                            <div className={styles.uppercontent}>
                                <h5>{m.name}</h5>
                                <span>{m.designation}</span>
                            </div>
                        </div>
                        <div className={styles.lower1}>
                            <span>{m.content}</span>
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
    </div>
  )
}

export default Testimonials
