import React from 'react';
import Link from "../link"
import styles from './index.module.css';
import logo from '../../images/pregnancy-stock-photography-logo.png'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <Link href="#" title="Link 1" type="footer" />
                <img className={styles.logo} src={logo} alt="" />
                <p className={styles.university}>Pregnancy Blog System @ 2020</p>
            </div>

        </footer>
    );
};

export default Footer;