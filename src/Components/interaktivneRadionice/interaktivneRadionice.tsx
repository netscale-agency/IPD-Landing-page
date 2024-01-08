import React from "react";
import styles from "./interaktivneRadionice.module.css";
import radioniceTomislav from "../../Assets/radioniceTomislav.png";
import interaktivneRadionice from "../../Assets/interaktivneRadionice.png";
import Rectangle from "../../Assets/Rectangle.svg";

const InteraktivneRadionice: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Interaktivne radionice s
            <span className={styles.headingSecond}> Tomislavom Kuljišom</span>
          </h2>
          <p className={styles.paragraph}>
            Radionice se nadovezuju na teorijski dio i kroz specifično
            osmišljene vježbe istraživat ćemo interpersonalna i emocionalna
            iskustva koja su oblikovala određenu osobnost, a kojih do sada nismo
            bili svjesni nego su ostala utisnuta u nesvjesno.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img
              className={styles.img}
              src={radioniceTomislav}
              alt="interaktivne radionice"
            />
          </div>
          <img className={styles.overlay} src={Rectangle} alt="overlay" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img
              className={styles.img}
              src={interaktivneRadionice}
              alt="interaktivne radionice"
            />
          </div>
          <img className={styles.overlaySecond} src={Rectangle} alt="overlay" />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            Vođene <span className={styles.headingSecond}>introspekcije</span>
          </h2>
          <p className={styles.paragraph}>
            Nakon svake cjeline, provodit ćemo introspekcije unutar softvera.
            One nam pomažu usmjeriti stečeno znanje prema razumijevanju sebe te
            primijeniti to znanje na osobni rast. Kroz introspekciju, voditelji
            mogu bolje sagledati polaznikovo stanje i pružiti podršku putem
            pisanih osvrta, potičući ga na daljnji rad na sebi na individualan i
            personaliziran način.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteraktivneRadionice;
