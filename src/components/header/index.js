import React from 'react';
import Link from "../link"
import styles from './index.module.css';
import logo from '../../images/pregnancy-stock-photography-logo.png'


const Header = () => {
    return (
        <header className={styles.navigation}>
            <img className={styles.logo} src={logo} alt=""/>
            <Link href="#" title="Link 1" type="header" /> 
        </header>
    );
};

export default Header;
