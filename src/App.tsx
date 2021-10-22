import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Organizations } from "./pages/Organizations";
import { Reports } from "./pages/Reports";
import { ReportDetail } from "./pages/ReportDetail";
import './App.scss';
export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route component={Organizations} exact path="/" />
        <Route component={Reports} exact path="/Reports/:id/:name" />
        <Route component={ReportDetail} exact path="/ReportDetail/:org_id/:org_name/:report_id" />
      </Suspense>
    </Router>
  );
}

export default App;
