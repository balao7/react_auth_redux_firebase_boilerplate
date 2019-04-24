import React from 'react';

import styles from './Input.module.css';

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div
      className={`${styles.InputGroup} ${
        touched[field.name] && errors[field.name] ? styles.Error : null
      }`}
    >
      <input className={styles.Input} {...field} {...props} />
      <div
        className={`${styles.errorMessagePlaceholder} ${
          touched[field.name] && errors[field.name] ? styles.errorMessage : null
        }`}
      >
        {errors[field.name]}
      </div>
    </div>
  );
};

export default Input;
