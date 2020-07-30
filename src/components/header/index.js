import React from 'react';
import Link from "../link"
import styles from './index.module.css';

const Header = () => {
    return (
        <header className={styles.navigation}>
            <Link href="#" title="❤ Home" type="header" /> 
            <Link href="#" title="❤ Contributers" type="header" /> 
            <Link href="#" title="❤ Publications" type="header" /> 
            <Link href="#" title="❤ Post!" type="header" /> 
            <Link href="#" title="❤ Login" type="header" /> 
            <Link href="#" title="❤ Register" type="header" /> 
            <Link href="#" title="❤ Profile" type="header" /> 
            <Link href="#" title="❤ Logout" type="header" /> 
        </header>
    );
};

export default Header;
