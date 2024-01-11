import React, { useState } from "react";
import styles from "./HeaderMobile.module.css";
import HamburgerIcon from "../../Assets/hamburgerIcon.png";
import Logo from "../../Assets/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderMobile: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" className={styles.logoImg} />
        </div>
        <div className={styles.navigation}>
          <img
            src={HamburgerIcon}
            alt="Menu"
            className={styles.hamburgerIcon}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuVisible && (
        <div className={styles.menuContainer}>
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
      )}
    </div>
  );
};

export default HeaderMobile;
