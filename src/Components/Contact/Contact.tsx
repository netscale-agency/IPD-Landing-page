import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./Contact.module.css";
import CustomTextInput from "../CustomInput/CustomInput";
import iconEmail from "../../Assets/iconEmail.svg";
import iconPhone from "../../Assets/iconPhone.svg";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case "name":
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
      default:
        break;
    }
  };

  const getMessageCharacterCount = () => {
    return message.length;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.contactForm}>
        <div className={styles.leftColumn}>
          <div className={styles.subheading}>Kontakt</div>
          <h1 className={styles.heading}>Imaš još pitanja?</h1>
          <p className={styles.paragraph}>
            Stojimo ti na raspolaganju u svakom trenutku! Ako imaš pitanja,
            komentar ili jednostavno želiš stupiti u kontakt s nama, slobodno
            nas kontaktiraj.
          </p>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <img src={iconEmail} alt="emailIcon" className={styles.icon} />
              contact@ipd-center.eu
            </div>
            <div className={styles.infoItem}>
              <img src={iconPhone} alt="emailIcon" className={styles.icon} />
              (123) 456 - 789
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <CustomTextInput
                placeholder="Ime i prezime"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <CustomTextInput
                placeholder="Email adresa"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <CustomTextInput
                placeholder="Napiši svoju poruku"
                value={message}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setMessage(e.target.value)
                }
                maxLength={1000}
              />
              <div className={styles.characterCount}>
                {getMessageCharacterCount()}/1000
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Pošalji poruku
            </button>
          </form>
        </div>
      </div>
      <div className={styles.dividerWrapper}>
        <hr className={styles.divider} />
      </div>
    </div>
  );
};

export default Contact;
