import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

const Modal = ({ opened, close, children }) =>
  ReactDOM.createPortal(
    <>
      <Backdrop opened={opened} close={close} open />
      <div className={`${styles.Modal} ${opened ? styles.Opened : null}`}>
        {children}
      </div>
    </>,
    document.getElementById('modal-root')
  );

export default Modal;
