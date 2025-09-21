import React, { useState } from 'react'
import styles from "../css/Navbar.module.css"
import useWindowWidth from './useWindowWidth'
import { Heart, Menu, X } from 'lucide-react';

function Navbar() {
  const width = useWindowWidth();
  const[isOpen,setIsopen]=useState(false);
  return (
    <div className={styles.navbar}>
        <div className={styles.name}>
      <div className={styles.logo}>
         <Heart fill="white" border="none"/>
        </div>
       <span>CareConnect</span> 
      </div>
      {width>991?(
        <>
        <ul className={styles.navbaritems}>
        <li>Home</li>
        <li>About</li>
         <li>Features</li>
         <li>How it Works</li>
         <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <button className={styles.but}>Get Started</button>
      </>
      ):(
        <>
        <div className={styles.toggle} onClick={()=>{setIsopen(!isOpen)}}> {isOpen ? <X size="36px"/> : <Menu size="36px" />}</div>
        {isOpen && (
            <ul className={styles.mobilemenu}>
              <li>Home</li>
        <li>About Us</li>
         <li>Disasters</li>
        <li>Contact Us</li>
            </ul>
          )}
        </>
      )}
      
    </div>
  )
}

export default Navbar
