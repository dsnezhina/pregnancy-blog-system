import React from 'react';
import styles from './index.module.css';

const Select = ({ onChange }) => {
    return (
        <div>
            <label className={styles.label} htmlFor='category'>Category:</label>
            <select className={styles.select} name='category' id='category' onChange={onChange}>
                <option value=''></option>
                <option value='Pregnancy'>Pregnancy</option>
                <option value='Mom Lifestyle'>Mom Lifestyle</option>
                <option value='Babies'>Babies</option>
                <option value='Kids'>Kids</option>
            </select>
        </div>
    );
};

export default Select;