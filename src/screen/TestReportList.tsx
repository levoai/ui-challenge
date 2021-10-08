import React from 'react';
import TestReportLayout from "../components/TestReportLayout";
import TestReportItem from "../components/TestReportItem";
import styles from './TestReportList.module.css';

export const App: React.FunctionComponent = (props) => {
  console.log(props.match.params.id);
  return (
    <div className={styles.container}>
      <TestReportLayout>
        <h3 className={styles.fontTestReportTitle}>Test Reports</h3>
        <TestReportItem></TestReportItem>
        <TestReportItem></TestReportItem>
      </TestReportLayout>
    </div>
  );
}

export default App;

