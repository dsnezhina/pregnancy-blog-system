import React from 'react';
import Link from '../link';
import styles from './index.module.css';


const Aside = () => {
    const links = [{
        title: 'Pregnancy',
        link: '/publications/pregnancy'
    },
    {
        title: 'Mom Lifestyle',
        link: '/publications/momlifestyle'
    },
    {
        title: 'Babies',
        link: '/publications/babies'
    },
    {
        title: 'Kids',
        link: '/publications/kids'
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
                            type='aside'
                        />);
                })
            }
        </aside>
    );
};

export default Aside;