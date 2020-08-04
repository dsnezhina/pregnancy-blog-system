import React from 'react';
import Link from "../link"
import styles from './index.module.css';

const Footer = () => {
    const links = [{
        title: "❤ Contacts",
        link: "/contacts"
    },
    {
        title: "❤ Facebook",
        link: "https://www.facebook.com/"
    },
    {
        title: "❤ Instagram",
        link: "https://www.instagram.com/"
    }];

    return (
        <footer className={styles.footer}>
            <div>
                {
                    links.map(navElement => {
                        return (
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="footer"
                            />)
                    })
                }
                <p className={styles.copyright}>Copyright © 2020</p>
                <p className={styles.info}>All rights reserved. This website uses cookies to enhance your user experience. By using our site, we will assume you are happy with it and agree to our privacy policy.</p>
            </div>

        </footer>
    );
};

export default Footer;