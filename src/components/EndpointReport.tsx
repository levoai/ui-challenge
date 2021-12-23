import React from 'react';
import '../App.css';
import {IReportEndpoint} from "../routes/TestReportDetail";

export default function EndpointReport({endpointReport}: {endpointReport: IReportEndpoint}) {
    return (
            <div className={endpointReport.status === 'SUCCESS' ? 'endpoint-report success' : 'endpoint-report failure'}>
                <span>{endpointReport.url}</span>
                <span>{Number(endpointReport.duration/1000).toFixed(2)} s</span>
            </div>
    );
}
