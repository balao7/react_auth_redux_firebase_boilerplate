import React from 'react';

import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Loader}>
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
        <span className={styles.LoaderSpan} />
      </div>
    </div>
  );
};

export default Spinner;
