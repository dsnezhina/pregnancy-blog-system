import React from 'react';
import Link from "../link"
import styles from './index.module.css';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="#" title="❤ Facebook" type="footer" />
                <Link href="#" title="❤ Twitter" type="footer" />
                <Link href="#" title="❤ Instagram" type="footer"/>
                <p className={styles.copyright}>Copyright © 2020</p>
                <p className={styles.info}>All rights reserved. This website uses cookies to enhance your user experience. By using our site, we will assume you are happy with it and agree to our privacy policy.</p>
            </div>

        </footer>
    );
};

export default Footer;