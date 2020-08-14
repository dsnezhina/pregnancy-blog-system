import React from 'react';
import styles from './index.module.css';

const Textarea = ({ content, onChange }) => {
    return (
        <textarea
            id='content'
            label='Content'
            className={styles.textarea}
            value={content}
            onChange={onChange}>
        </textarea>
    );
};

export default Textarea;