import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from "react-router-dom";
import OrganizationsPicker from './OrganizationPicker/OrganizationPicker';
import TestReporList from './TestReportList/TestReportList';
import TestReporDetails from './TestReportDetails/TestReportDetails';
import OrganizationContext from './OrganizationContext';

export const App: React.FunctionComponent = () => {
  const organizationsState = useState([]);

  return (
    <div>
      <OrganizationContext.Provider value={organizationsState}>
        <Router>
          <Switch>
            <Route path="/organizations/:orgId/reports/:reportId">
              <TestReporDetails />
            </Route>
            <Route path="/organizations/:orgId/reports">
              <TestReporList />
            </Route>
            <Route path="/">
              <OrganizationsPicker />
            </Route>
          </Switch>
        </Router>
      </OrganizationContext.Provider>
    </div >
  );
}

export default App;
