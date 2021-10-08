import React, { Children } from 'react';
import styles from './TestReportLayout.module.css';

export const App: React.FunctionComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideBar}>
        <h4 className={styles.fontBlack}>Organization Name A</h4>
        <br />
        <br />
        <br />
        <h5 className={styles.fontReportDetail}>Test Reports</h5>
      </div>
      <div className={styles.content}>
        <div>
        {props.children}
        </div>
      </div>
    </div>
  );
}

export default App;
