import React from "react";
import styles from "./prijaviSe.module.css";
import laptop from "../../Assets/laptop.png";
import laptopBackground from "../../Assets/laptopBackground.svg";
import stepsIcon from "../../Assets/stepsIcon.svg";

const PrijaviSe: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.subheading}>Kako sve funkcionira</div>
        <img src={stepsIcon} className={styles.stepsIcon} alt="steps" />

        <div className={styles.heading}>
          Prijavi se na program i započni sa svojim osobnim razvojem!
        </div>
        <span className={styles.text}>
          Za početak je potrebno uplatit traženi iznos i ostaviti svoju email
          adresu koja se veže uz osobni Google ili Apple račun.
        </span>
        <span className={styles.text}>
          Nakon što zaprimimo tvoju uplatu, na email adresu ti šaljemo link na
          registraciju u naš softver.
        </span>
        <span className={styles.text}>
          Kada ispuniš svoje podatke, uspješno ćeš biti registriran i možeš
          neometano gledati sve video i pdf materijale u vremeskom trajanju od
          godinu dana.
        </span>
        <button className={styles.enrollBtn}>Upiši se na program</button>
      </div>
      <div className={styles.rightColumn}>
        <img
          src={laptopBackground}
          className={styles.laptopBckg}
          alt="laptopBckg"
        />
        <img src={laptop} className={styles.laptopImg} alt="Laptop" />
      </div>
    </div>
  );
};

export default PrijaviSe;
