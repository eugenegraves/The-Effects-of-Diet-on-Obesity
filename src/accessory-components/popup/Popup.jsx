import React from 'react';
import styles from './PopupStyles.module.css';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                {children}
                <button className={styles.closeButton} onClick={onClose}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Popup;