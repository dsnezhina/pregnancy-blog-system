import React from 'react';
import Link from '../link'
import styles from './index.module.css';


const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Link href="#" title="Link 1" type="aside"/>
            <Link href="#" title="Link 1" type="aside"/>
            <Link href="#" title="Link 1" type="aside"/>
            <Link href="#" title="Link 1" type="aside"/>
        </aside>
    );
};

export default Aside;