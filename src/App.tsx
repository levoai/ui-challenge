import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Organization, Home, NoMatch } from './pages';

const queryClient = new QueryClient();

export const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/organization/:organizationId" component={Organization} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </QueryClientProvider>
);

export default App;
