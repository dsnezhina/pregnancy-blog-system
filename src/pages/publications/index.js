import React from 'react';
import Aside from '../../components/aside';
import Blogposts from '../../components/blogposts'
import styles from './index.module.css';
import Title from '../../components/title';
import PageLayout from '../../components/page-layout';


function PublicationsPage() {
    return (
        <PageLayout>
            <Aside />
            <div className={styles.container}>
                <Title title="Publications" />
                <Blogposts />
            </div>
        </PageLayout>
    );
}

export default PublicationsPage;