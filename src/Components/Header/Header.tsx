import React from "react";
import styles from "./Header.module.css";
import Logo from "../../Assets/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" className={styles.logoImg} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.menu}>
          <Link
            to="oProgramu"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navItem}
          >
            O programu
          </Link>
          <Link
            to="sadrzaj"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navItem}
          >
            Sadržaj
          </Link>
          <Link
            to="benefiti"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navItem}
          >
            Benefiti
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navItem}
          >
            Testimonials
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navItem}
          >
            FAQ
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.navItem}
          >
            Kontakt
          </Link>
        </div>

        <button className={styles.headerBtn}>Upiši program</button>
      </div>
    </div>
  );
};

export default Header;
