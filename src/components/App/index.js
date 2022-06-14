// core
import React from 'react';

// components
import Shortener from '../Shortener';

// styles
import styles from './styles.module.scss';


const App = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.mainTitle}>
        <h1>Link shortener</h1>
      </header>
      <main>
        <Shortener/>
      </main>
    </div>
  )
};

export default App;
