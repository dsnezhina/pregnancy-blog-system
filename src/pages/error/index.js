import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css';
import errorPageImage from '../../images/error-page-image.png';

const ErrorPage = () => {
    return (
        <div className={styles.app}>
          <Header />
          <img className={styles.img} src={errorPageImage} alt="" />
          {/* <div className={styles.container}>
          </div> */}
          <Footer />
        </div>
      );
}

export default ErrorPage;