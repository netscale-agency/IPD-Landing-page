import React, { useState } from "react";
import styles from "./Faq.module.css";
import plusIcon from "../../Assets/plusIcon.svg";
import minusIcon from "../../Assets/minusIcon.svg";

const Faq: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "Kome je program Video RAR  namijenjen?",
      answer:
        "Program Video RAR namijenjen je svim psihički zdravim osobama (starijim od 21 godine) koje žele bolje upoznati sebe, preuzeti odgovornost za vlastiti život te su spremne i voljne raditi na svojem osobnom nesvjesnom. Cilj je mijenjati i eliminirati aspekte vlastitog funkcioniranja koji mogu ograničavati postizanje punog potencijala i življenje života ispunjenog zadovoljstvom.",
    },
    {
      question: "Kome program Video RAR nije namijenjen?",
      answer: "lorem ipsum",
    },
    { question: "Što nakon Video RAR-a?", answer: "lorem ipsum" },
    {
      question: "Koji su najčešći motivi za upis Video RAR-a?",
      answer: "lorem ipsum",
    },
    { question: "Koje su prednosti upisa Video RAR-a?", answer: "lorem ipsum" },
    {
      question: "Koja je znanstvena pozadina Video RAR-a?",
      answer: "lorem ipsum",
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.heading}>FAQ’s</h2>
        <p className={styles.faqText}>
          Ovdje su odgovori na najčešće postavljena pitanja. Ukoliko imaš bilo
          kakvih nedoumica ili dodatnih pitanja, slobodno nas kontaktiraj.
        </p>
      </div>
      <div className={styles.questionsWrapper}>
        {questions.map((q, index) => (
          <div key={index} className={styles.questionContainer}>
            <div
              className={`${styles.questionRow} ${
                expandedIndex === index ? styles.expandedQuestion : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <p
                className={`${styles.question} ${
                  expandedIndex === index ? styles.expandedQuestionText : ""
                }`}
              >
                {q.question}
              </p>
              <span className={styles.plusIcon}>
                {expandedIndex === index ? (
                  <img src={minusIcon} alt="minus" />
                ) : (
                  <img src={plusIcon} alt="plus" />
                )}
              </span>
            </div>
            {expandedIndex === index && (
              <p className={styles.answer}>{q.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
