import React from 'react';
import Header from './components/header';
import Footer from './components/footer'
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}></div>
      <Footer />
    </div>
  );
}

export default App;