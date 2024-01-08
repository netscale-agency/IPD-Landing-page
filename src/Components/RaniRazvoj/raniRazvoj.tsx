import React from "react";
import styles from "./raniRazvoj.module.css";
import raniRazvojImage from "../../Assets/raniRazvoj.png";
import checkmark from "../../Assets/CheckGreen.svg";

const RaniRazvoj: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img
          src={raniRazvojImage}
          className={styles.raniRazvojImg}
          alt="Rani razvoj"
        />
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.heading}>
          Kako program može pomoći tvom razvoju i što to znači za tvoj novi
          početak?
        </h2>
        <p className={styles.description}>
          Pružamo ti priliku za otključavanje potencijala i postizanje osobnog
          rasta. Istraži temeljito prednosti našeg programa i razmisli o
          ulaganju koje može rezultirati iznimnim napretkom prema tvojim
          ciljevima i unapređenju života.
        </p>
        <div className={styles.subheading}>Zašto upisati Rani razvoj?</div>
        <div className={styles.checkList}>
          <div className={styles.checkItem}>
            <img
              src={checkmark}
              alt="checkmark"
              className={styles.checkmarkIcon}
            />
            <span className={styles.checkText}>
              Predavanja pružaju teoretsku podlogu za sva tvoja iskustva i
              osjećaje.
            </span>
          </div>
          <div className={styles.checkItem}>
            <img
              src={checkmark}
              alt="checkmark"
              className={styles.checkmarkIcon}
            />
            <span className={styles.checkText}>
              Iskustvene radionice aktiviraju implicitnu memoriju, otkrivajući
              istinu o tebi i tvojim ranim iskustvima koja su te oblikovala.
            </span>
          </div>
          <div className={styles.checkItem}>
            <img
              src={checkmark}
              alt="checkmark"
              className={styles.checkmarkIcon}
            />
            <span className={styles.checkText}>
              Otkrij kako funkcioniraš i kako možeš promijeniti aspekte i
              unutarnja stanja koja ti aktiviraju nezadovoljstvo kroz život.
            </span>
          </div>
          <div className={styles.dividerWrapper}>
            <hr className={styles.divider} />
          </div>
        </div>
        <div className={styles.enrollContainer}>
          <div className={styles.priceContainer}>
            <span className={styles.totalPrice}>
              Ukupno <span className={styles.totalPriceSecond}>195.00 Eur</span>
            </span>
            <span className={styles.payment}>*Plativo u 4 rate</span>
          </div>

          <button className={styles.enrollBtn}>Upiši se na program</button>
        </div>
      </div>
    </div>
  );
};

export default RaniRazvoj;
