import React from 'react';

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ children, show }) => {
  return (
    <div className={`${styles.ErrorMessage} ${show ? styles.Show : null}`}>
      {children}
    </div>
  );
};

export default ErrorMessage;
