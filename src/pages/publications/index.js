import React from 'react';
import { useLocation } from 'react-router-dom';
import Aside from '../../components/aside';
import Blogposts from '../../components/blogposts'
import styles from './index.module.css';
import Title from '../../components/title';
import PageLayout from '../../components/page-layout';


const PublicationsPage = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    return (
        <PageLayout>
            <Aside />
            <div className={styles.container}>
                <Title title="Publications" />
                <Blogposts category={category} />
            </div>
        </PageLayout>
    );
}

export default PublicationsPage;