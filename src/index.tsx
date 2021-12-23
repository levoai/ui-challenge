import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoMatch from "./routes/NoMatch";
import Navigation from "./routes/Navigation";
import Organizations from "./routes/Organizations";
// @ts-ignore
import * as R_ from 'ramda-extension';
// @ts-ignore
import * as R from 'ramda';
import TestReports from "./routes/TestReports";
import TestReportDetail from "./routes/TestReportDetail";

export function ResponseToCamel(data: any) {
    if (data instanceof Array) {
        return R.map((organization: any) =>
            R.mergeAll(R.map((orgKey: any) =>
                ({[R_.toCamelCase(orgKey)]: organization[orgKey]}), Object.keys(organization))), data)
    }
    return R.mergeAll(R.map((a: any) => ({[R_.toCamelCase(a)]: data[a]}), Object.keys(data)));
}

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<App />} />
                <Route path="*" element={<NoMatch />} />
                <Route path="/organizations" element={<Organizations/>} />
                <Route path="/organizations/:id/reports" element={<TestReports/>} />
                <Route path="/organizations/:id/reports/:reportId" element={<TestReportDetail/>} />
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
//https://my.api.mockaroo.com/organizations.json?key=2e435a20
//https://my.api.mockaroo.com/organizations/{org_id}.json?key=2e435a20
//https://my.api.mockaroo.com/organizations/{org_id}/reports.json?key=2e435a20
//https://my.api.mockaroo.com/organizations/{org_id/reports/{report_id}/details.json?key=2e435a20
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
