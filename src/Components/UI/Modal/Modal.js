import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

const Modal = ({ opened, close, children }) => {
  useLockBodyScroll(opened);

  return ReactDOM.createPortal(
    <>
      <Backdrop opened={opened} close={close} open />
      <div className={`${styles.Modal} ${opened ? styles.Opened : null}`}>
        {children}
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

// Hook to prevent scroll when its opened
function useLockBodyScroll(opened) {
  useLayoutEffect(() => {
    if (!opened) return;
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [opened]); // Empty array ensures effect is only run on mount and unmount
}

export default Modal;
