import React, { useState } from "react";
import styles from "./sadrzajPrograma.module.css";
import Pagination from "./Pagination";
import sadrzajPrograma from "../../Assets/sadrzajPrograma.png";
import Rectangle from "../../Assets/Rectangle.svg";

const SadrzajPrograma: React.FC = () => {
  const programData = [
    {
      subheading: "1. CJELINA",
      heading: "Nesvjesna emocionalna potraživanja",
      text: "U partnerskim odnosima nesvjesno tražimo određeno ponašanje kako bismo zadovoljili svoje emocionalne potrebe. To može uključivati osjećaj sigurnosti, prisutnost partnera, prostor za individualnost, priznanje i razumijevanje. Problem nastaje kada partner ne ispunjava očekivanja, izazivajući bol i ljutnju. Ova reakcija često proizlazi iz nesvjesnih očekivanja da će partner djelovati na način sličan skrbnicima iz ranog djetinjstva, često suprotno od onoga što nam stvarno treba. Emocionalna bol i ljutnja ukazuju na unutarnje probleme, a razumijevanje vlastitog ranog iskustva ključno je za promjenu ovih obrazaca ponašanja u odrasloj dobi.",
    },
    { subheading: "Subheading 2", heading: "Heading 2", text: "Text 2" },
    { subheading: "Subheading 3", heading: "Heading 3", text: "Text 3" },
    { subheading: "Subheading 4", heading: "Heading 4", text: "Text 4" },
    { subheading: "Subheading 5", heading: "Heading 5", text: "Text 5" },
    { subheading: "Subheading 6", heading: "Heading 6", text: "Text 6" },
    { subheading: "Subheading 7", heading: "Heading 7", text: "Text 7" },
    { subheading: "Subheading 8", heading: "Heading 8", text: "Text 8" },
    { subheading: "Subheading 9", heading: "Heading 9", text: "Text 9" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;

  const totalPages = Math.ceil(programData.length / itemsPerPage);

  const currentProgramSection = programData[currentPage];
  return (
    <div className={styles.sadrzajProgramaContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.subheading}>SADRŽAJ PROGRAMA</div>
        <h1 className={styles.heading}>Edukacija o raznim temama</h1>
        <div className={styles.programSections}>
          <h3 className={styles.programSubtitle}>
            {currentProgramSection.subheading}
          </h3>
          <h2 className={styles.programTitle}>
            {currentProgramSection.heading}
          </h2>
          <div className={styles.programText}>{currentProgramSection.text}</div>
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img className={styles.overlay} src={Rectangle} alt="overlay" />
            <img
              src={sadrzajPrograma}
              alt="sadrzajPrograma"
              className={styles.sadrzajProgramaImg}
            />
            <img
              className={styles.overlaySecond}
              src={Rectangle}
              alt="overlay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadrzajPrograma;
