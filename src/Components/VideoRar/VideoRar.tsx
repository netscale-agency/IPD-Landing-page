import React from "react";
import styles from "./VideoRar.module.css";
import videoRarImg from "../../Assets/videoRarImg.png";
import checkmark from "../../Assets/CheckGreen.svg";

const VideoRar: React.FC = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.heading}>
          Što je <span className={styles.headingSecond}>Video RAR?</span>
        </h2>
        <p className={styles.text}>
          Video RAR je strukturirani program koji ti omogućuje da sagledaš vezu
          između vlastitih ranih iskustava tijekom univerzalnih razvojnih
          procesa u ranom periodu i sadašnjeg funkcioniranja kroz život.
        </p>
      </div>
      <div className={styles.columnsWrapper}>
        <div className={styles.leftColumn}>
          <img
            src={videoRarImg}
            alt="Video rar"
            className={styles.videoRarImg}
          />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.section}>
            <h2 className={styles.subheading}>Sadržaj programa</h2>
            <p className={styles.sectionText}>
              Program obuhvaća raznolike teme i aktivnosti s ciljem pružanja
              sveobuhvatnog iskustva u tvom učenju i razvoju. Evo pregleda
              ključnih aspekata programa:
            </p>
            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmarkIcon}
              />
              <span className={styles.checkText}>
                50 sati video predavanja podijeljenih u 10 cjelina
              </span>
            </div>
            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmarkIcon}
              />
              <span className={styles.checkText}>
                PDF materijali za dodatnu podršku
              </span>
            </div>
            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmarkIcon}
              />
              <span className={styles.checkText}>
                Vođene introspekcije zbog dubljeg razumijevanja
              </span>
            </div>
            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="checkmark"
                className={styles.checkmarkIcon}
              />
              <span className={styles.checkText}>
                Interaktivne radionice s Tomislavom Kuljišem za praktičnu
                primjenu naučenog.
              </span>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subheading}>Preduvjeti za upis programa</h2>
            <p className={styles.sectionText}>
              Za upis u program ne postoje posebni zahtjevi vezani uz trenutačne
              motive ili razinu prethodne edukacije.
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subheading}>Trajanje programa</h2>
            <p className={styles.sectionText}>
              Svi resursi, materijali i prednosti koje pruža naša platforma
              dostupni su vam tijekom godinu dana nakon upisa.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.videoRarButton}>Upiši se na program</button>
      </div>
    </div>
  );
};

export default VideoRar;
