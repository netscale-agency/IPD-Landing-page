import React, { useState } from "react";
import styles from "./Footer.module.css";
import youtubeLogo from "../../Assets/youtubeLogo.svg";
import instagramLogo from "../../Assets/instagramLogo.svg";
import facebookLogo from "../../Assets/facebookLogo.svg";
import YoutubeLogoGreen from "../../Assets/YoutubeLogoGreen.svg";
import InstagramLogoGreen from "../../Assets/InstagramLogoGreen.svg";
import FacebookLogoGreen from "../../Assets/FacebookLogoGreen.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer: React.FC = () => {
  const [isYoutubeHovered, setYoutubeHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [isFacebookHovered, setFacebookHovered] = useState(false);

  return (
    <div className={styles.footer}>
      <div className={styles.copyrightContainer}>
        <div className={styles.copyrights}>
          © 2023 IPD International. All Rights Reserved.
        </div>
      </div>
      <div className={styles.menuContainer}>
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
      <div className={styles.socialsContainer}>
        <a
          href="https://www.youtube.com/@tomislavkuljis-ipd"
          className={styles.iconLink}
          target="_blank"
        >
          <img
            src={isYoutubeHovered ? YoutubeLogoGreen : youtubeLogo}
            alt="IconYT"
            className={styles.icon}
            onMouseEnter={() => setYoutubeHovered(true)}
            onMouseLeave={() => setYoutubeHovered(false)}
          />
        </a>
        <a
          href="https://www.instagram.com/ipd_centar/?hl=en"
          className={styles.iconLink}
          target="_blank"
        >
          <img
            src={isInstagramHovered ? InstagramLogoGreen : instagramLogo}
            alt="IconInsta"
            className={styles.icon}
            onMouseEnter={() => setInstagramHovered(true)}
            onMouseLeave={() => setInstagramHovered(false)}
          />
        </a>
        <a
          href="https://www.facebook.com/ipdcentar/"
          className={styles.iconLink}
          target="_blank"
        >
          <img
            src={isFacebookHovered ? FacebookLogoGreen : facebookLogo}
            alt="IconFB"
            className={styles.icon}
            onMouseEnter={() => setFacebookHovered(true)}
            onMouseLeave={() => setFacebookHovered(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
