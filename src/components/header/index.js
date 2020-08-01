import React from 'react';
import Link from "../link"
import styles from './index.module.css';
import getNavigation from '../../utils/navigation'

const Header = () => {
    const links = getNavigation({ id: "123" });
    return (
        <header className={styles.navigation}>
            {
                links.header.map(navElement => {
                    return (
                        <Link
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type="header"
                        />)
                })
            }
        </header>
    );
};


export default Header;
