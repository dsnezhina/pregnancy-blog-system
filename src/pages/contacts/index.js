import React from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import Map from '../../components/map/index'

const ContactsPage = () => {

    const location = {
        address: 'Tintyava 15-17, 1113 Sofia, Bulgaria',
        lat: 42.666775,
        lng: 23.3500883
    };

    return (
        <PageLayout>
            <div className={styles.container}>
            <Title title='Contacts' />
            <p className={styles.paragraph}><b>Email us:</b> pregnancy@gmail.com</p>
            <p className={styles.paragraph}><b>Call us:</b> +359 887 887 887</p>
            <p className={styles.paragraph}><b>Visit us:</b> Tintyava 15-17, 1113 Sofia, Bulgaria</p>
            <Map location={location} zoomLevel={17} />
            </div>
        </PageLayout >
    );
};

export default ContactsPage;