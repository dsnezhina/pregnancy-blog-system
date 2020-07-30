import React from 'react';
import Link from '../link'
import styles from './index.module.css';


const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Link href="#" title="Category 1" type="aside"/>
            <Link href="#" title="Category 2" type="aside"/>
            <Link href="#" title="Category 3" type="aside"/>
        </aside>
    );
};

export default Aside;