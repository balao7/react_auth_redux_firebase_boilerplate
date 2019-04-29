import React from 'react';

import styles from './SuccessMessage.module.css';

const SuccessMessage = ({ children, show }) => {
  return (
    <div className={`${styles.Success} ${show ? styles.Show : null}`}>
      {children}
    </div>
  );
};

export default SuccessMessage;
