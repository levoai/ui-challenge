import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';

import Organizations from '../components/Organizations';
import OrganizationTestReports from '../components/OrganizationTestReports';
import OrganizationTestReportsDetails from '../components/OrganizationTestReportsDetails';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route 
          key="home" 
          path="/" 
          component={Organizations} exact
        />
        <Route 
          key="test-reports" 
          path="/organizations/:organizationId/test-reports" 
          component={OrganizationTestReports} exact
        />
        <Route 
          key="test-report-detail" 
          path="/organizations/:organizationId/test-reports/:reportId" 
          component={OrganizationTestReportsDetails} exact
        />
        <Redirect from='*' to='/' />
      </Switch>
    )
  }
}

export default Routes