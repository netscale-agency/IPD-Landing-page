import React, { InputHTMLAttributes } from "react";
import styles from "./CustomInput.module.css";

interface CustomTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  ...props
}) => {
  return (
    <div className={styles.customTextInput}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomTextInput;
