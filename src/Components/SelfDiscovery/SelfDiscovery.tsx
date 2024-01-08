import React from "react";
import styles from "./SelfDiscovery.module.css";
import SelfDiscoveryImg from "../../Assets/selfDiscoveryImg.png";
import greenArrow from "../../Assets/GreenArrowRight.svg";

const SelfDiscovery: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h3 className={styles.subheading}>Upoznavanje stvarnoga sebe</h3>
        <h2 className={styles.heading}>
          Napredni program o
          <span className={styles.headingSecond}> ranom razvoju</span> i
          njegovoj povezanosti s ljudskim funkcioniranjem
        </h2>
        <p className={styles.text}>
          Kroz RAR program, oslanjamo se na suvremena znanstvena otkrića o
          utjecaju kvalitete rane privrženosti na cjeloživotno zdravlje i
          kvalitetu života. Ako i ti težiš unapređenju kvalitete života, nalaziš
          se na pravom mjestu.
        </p>
        <div className={styles.linkContainer}>
          <a href="#" className={styles.moreInfoLink}>
            Saznaj više
          </a>
          <img src={greenArrow} alt="green arrow" className={styles.icon} />
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.imgContainer}>
          <img
            src={SelfDiscoveryImg}
            alt="Right arrow"
            className={styles.SelfDiscoveryImg}
          />
        </div>
      </div>
    </div>
  );
};

export default SelfDiscovery;
