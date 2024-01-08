import React from "react";
import styles from "./Footer.module.css";
import youtubeLogo from "../../Assets/youtubeLogo.svg";
import instagramLogo from "../../Assets/instagramLogo.svg";
import facebookLogo from "../../Assets/facebookLogo.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <div className={styles.copyrights}>
          © 2023 IPD International. All Rights Reserved.
        </div>
      </div>
      <div className={styles.menuContainer}>
        <a href="#" className={styles.navItem}>
          O programu
        </a>
        <a href="#" className={styles.navItem}>
          Sadržaj
        </a>
        <a href="#" className={styles.navItem}>
          Benefiti
        </a>
        <a href="#" className={styles.navItem}>
          Testimonials
        </a>
        <a href="#" className={styles.navItem}>
          FAQ
        </a>
        <a href="#" className={styles.navItem}>
          Kontakt
        </a>
      </div>
      <div className={styles.socialsContainer}>
        <img src={youtubeLogo} alt="IconYT" className={styles.icon} />
        <img src={instagramLogo} alt="IconInsta" className={styles.icon} />
        <img src={facebookLogo} alt="IconFB" className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
