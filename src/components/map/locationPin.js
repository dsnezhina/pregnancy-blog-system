import React from 'react'
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import styles from './index.module.css';

const LocationPin = ({ text }) => (
    <div className={styles.pin}>
        <Icon icon={locationIcon} className="pin-icon" />
        <p className={styles["pin-text"]}>{text}</p>
    </div>
);

export default LocationPin;