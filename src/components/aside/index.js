import React from 'react';
import Link from '../link'
import styles from './index.module.css';


const Aside = () => {
    const links = [{
        title: "Pregnancy",
        link: "/category/pregnancy"
    },
    {
        title: "Mom Lifestyle",
        link: "/category/mom-lifestyle"
    },
    {
        title: "Baby",
        link: "/category/baby"
    },
    {
        title: "Kids",
        link: "/category/kids"
    }];
    
    return (
        <aside className={styles.aside}>
            {
                links.map(navElement => {
                    return (
                        <Link
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type="aside"
                        />)
                })
            }
        </aside>
    );
};

export default Aside;