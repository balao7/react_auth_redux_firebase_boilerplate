import React from 'react';

import styles from './ExampleContainer.module.css';

const ExampleContainer = () => (
  <h1 className={styles.Title}>
    Your protected container, only rendered if authed
  </h1>
);

export default ExampleContainer;
