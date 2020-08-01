import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Aside from '../../components/aside';
import Blogposts from '../../components/blogposts'
import styles from './index.module.css';
import Title from '../../components/title'


function PublicationsPage() {
    return (
        <div className={styles.app}>
            <Header />

            <div className={styles.container}>
                <Title title="Publications" />
                <Aside />
                <Blogposts />
            </div>
            <Footer />
        </div>
    );
}

export default PublicationsPage;