import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css';
import errorPageImage from '../../images/home-page-image.png';

function HomePage() {
  return (
    <div className={styles.app}>
      <Header />
      <img className={styles.img} src={errorPageImage} alt="" />
      <Footer />
    </div>
  );
}

export default HomePage;


