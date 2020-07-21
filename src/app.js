import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Aside from './components/aside';
import Blogposts from './components/blogposts'
import styles from './app.module.css';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Blogposts />
      </div>
      <Footer />
    </div>
  );
}

export default App;