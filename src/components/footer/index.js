import React from 'react';
import Link from "../link"
import styles from './index.module.css';
import getNavigation from '../../utils/navigation'


const Footer = () => {
    const links = getNavigation({ id: "123" });

    return (
        <footer className={styles.footer}>
            <div>
                {
                    links.footer.map(navElement => {
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