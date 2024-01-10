import React from "react";
import styles from "./Header.module.css";
import HamburgerIcon from "../../Assets/hamburgerIcon.png";
import Logo from "../../Assets/Logo.png";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logoImg} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.menu}>
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

        <button className={styles.headerBtn}>Upiši program</button>
      </div>
    </div>
  );
};

export default Header;
