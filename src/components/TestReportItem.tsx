import React from 'react';
import styles from './TestReportItem.module.css';

export const App: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.executionFont}>Execution #1</h3>
        <h5 className={styles.timeOffsetFont}>2 min ago - 10m long</h5>
      </div>
      <div className={styles.markSection}>
        <span className={styles.fontPassed}>10 passed</span>
        <span className={styles.fontFailed}>3 failed</span>
      </div>  
    </div>
  );
}

export default App;
