import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Organizations from "./screen/Organizations";
import TestReportList from "./screen/TestReportList";

export const App: React.FunctionComponent = () => {
  return (
    <Layout className={styles.App}>
      <Route exact path="/" component={Organizations} />
      <Route exact path="/organizations" component={Organizations} />
      <Route exact path="/testreports/:id" component={TestReportList} />
    </Layout>
  );
}

export default App;
