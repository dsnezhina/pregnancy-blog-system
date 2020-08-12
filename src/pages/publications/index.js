import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Aside from '../../components/aside';
import Blogposts from '../../components/blogposts'
import styles from './index.module.css';
import Title from '../../components/title';
import PageLayout from '../../components/page-layout';


const PublicationsPage = () => {

    const match = useRouteMatch();
    const category = match.params.category || null

    return (
        <PageLayout>
            <Aside />
            <div className={styles.container}>
                <Title title='Publications' />
                <Blogposts category={category} />
            </div>
        </PageLayout>
    );
};

export default PublicationsPage;