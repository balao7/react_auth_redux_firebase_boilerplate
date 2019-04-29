import React from 'react';

import styles from './Button.module.css';

const Button = ({ onClick, type, disabled, loading, children }) => {
  return (
    <button
      className={styles.Button}
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
