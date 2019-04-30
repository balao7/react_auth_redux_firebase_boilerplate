import React from 'react';

import styles from './Button.module.css';

const Button = ({ onClick, type, disabled, loading, red, children }) => {
  return (
    <button
      className={`${styles.Button} ${red ? styles.Red : null}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <div className={styles.Loading}>
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
