import React from 'react';
import styles from './index.module.css';

const ImageInput = ({ onClick }) => {
    return (
        <div>
            <label className={styles.label} htmlFor='category'>Image:</label>
            <button type='button' className={styles.button} name='image' id='image' onClick={onClick}>Upload</button>
        </div>
    );
};

export default ImageInput;