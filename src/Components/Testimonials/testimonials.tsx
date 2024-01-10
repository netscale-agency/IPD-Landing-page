import React, { useState } from "react";
import styles from "./testimonials.module.css";
import quotesImg from "../../Assets/quotes.svg";
import arrowLeft from "../../Assets/arrowLeft.svg";
import arrowRight from "../../Assets/arrowRight.svg";

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      text: "Great job, I will definitely be ordering again! Programs are worth much more than I paid. I would like to personally thank you.",
      author: "Author 1",
    },
    { text: "Testimonial 2 text", author: "Author 2" },
    { text: "Testimonial 3 text", author: "Author 3" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev > 0 ? prev - 1 : testimonialsData.length - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev < testimonialsData.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.subheading}>TESTIMONIALS</div>
        <div className={styles.heading}>
          Pridruži se
          <span className={styles.headingSecond}> sretnim polaznicima </span>
          našeg programa
        </div>
        <span className={styles.text}>
          Iskustva naših polaznika neka govore umjesto nas. Evo šta kažu o
          svojim iskustvima sa našim programom. Njihove riječi su najbolji
          pokazatelj kvalitete i prednosti koje nudimo. Ako napokon želiš
          uložiti u sebe i svoj osobni razvoj, nemoj čekati nego upiši program
          već danas.
        </span>
        <button className={styles.enrollBtn}>Upiši se na program</button>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.recommendationsContainer}>
          <div className={styles.imgContainer}>
            <img src={quotesImg} className={styles.quotesImg} alt="quotes" />
          </div>
          <div className={styles.testimonials}>
            <div className={styles.testimonialText}>
              {testimonialsData[currentTestimonial].text}
            </div>
            <div className={styles.testimonialAuthor}>
              - {testimonialsData[currentTestimonial].author}
            </div>
          </div>

          <div className={styles.navigationArrows}>
            <button className={styles.arrowBtn} onClick={handlePrevTestimonial}>
              <img src={arrowLeft} alt="Previous Testimonial" />
            </button>

            <button className={styles.arrowBtn} onClick={handleNextTestimonial}>
              <img src={arrowRight} alt="Next Testimonial" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
