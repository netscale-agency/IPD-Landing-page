import React from "react";
import styles from "./aboutTomislav.module.css";
import TomislavImage from "../../Assets/TomislavPhoto.png";

const AboutTomislav: React.FC = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.headingContainer}>
        <h2 className={styles.aboutHeading}>O Tomislavu Kuljišu</h2>
        <p className={styles.aboutText}>
          Tomislav Kuljiš već više od desetljeća, zajedno sa svojim timom,
          razvija i provodi transformativne programe cjelovitog osobnog razvoja
          (Integral Personal Development - IPD), uključujući program RAR - Rani
          razvoj i utjecaj na život. Ovaj program je privukao tisuće zadovoljnih
          polaznika. Pozivamo te da se pridružiš i ti, te upoznaš sebe u
          potpunosti.
        </p>
      </div>
      <div className={styles.columnsWrapper}>
        <div className={styles.leftColumn}>
          <p className={styles.quote}>
            “Ostao sam duboko fasciniran spoznajama o utjecaju iskustava sa
            skrbnicima u periodu ranog razvoja djeteta na cjeloživotno
            funkcioniranje i zdravlje buduće osobe. Daljnje čitanje knjiga,
            znanstvenih istraživanja, nove edukacije i osobna iskustva samo su
            mi još više potvrdili da sam među onima koji su sagledali novu
            paradigmu koja počinje mijenjati mnoge sfere društva, pogotovo u
            roditeljstvu, medicini i psihoterapiji.“
          </p>
          <div className={styles.titleWrapper}>
            <span className={styles.name}>Tomislav Kuljiš,</span>
            <span className={styles.name}>
              osnivač ITP-a i ravnatelj IPD CENTRA
            </span>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <img
            src={TomislavImage}
            alt="Video rar"
            className={styles.TomislavImage}
          />
        </div>
      </div>
      <div className={styles.statisticsContainer}>
        <div className={styles.statisticItem}>
          <span className={styles.number}>300+ </span>
          <span className={styles.label}>Video predavanja</span>
        </div>
        <div className={styles.statisticItem}>
          <span className={styles.number}>10+</span>
          <span className={styles.label}>Godina rada</span>
        </div>
        <div className={styles.statisticItem}>
          <span className={styles.number}>7000+</span>
          <span className={styles.label}>Polaznika</span>
        </div>
        <div className={styles.statisticItem}>
          <span className={styles.number}>200+</span>
          <span className={styles.label}>Diplomiranih Psihoterapeuta</span>
        </div>
      </div>
    </div>
  );
};

export default AboutTomislav;
