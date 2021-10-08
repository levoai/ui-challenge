import React from 'react';
import styles from './Layout.module.css';
import Logo from '../assets/logo.png';

export const App: React.FunctionComponent = (props) => {
  return (
    
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="organization item"></img>
      </div>
      {props.children}
    </div>
  );
}

export default App;
