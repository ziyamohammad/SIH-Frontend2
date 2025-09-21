
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
                            <p>{m.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Testimonials
