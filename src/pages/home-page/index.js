import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css';
import homePageImage from '../../images/home-page-image.png'

function HomePage() {
  return (
    <div className={styles.app}>
      <Header />
      <img className={styles.img} src={homePageImage} alt="" />
      {/* <div className={styles.container}>
      </div> */}
      <Footer />
    </div>
  );
}

export default HomePage;