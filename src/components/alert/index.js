import React from 'react';
import styles from './index.module.css';

const Alert = ({ message }) => {
    return (
        <div className={styles.alert}>
            <b>{message}</b>
        </div>
    );
};

export default Alert;