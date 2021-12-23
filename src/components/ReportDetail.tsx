import React from 'react';
import '../App.css';
import {ITestReportDetail} from "../routes/TestReportDetail";

export default function ReportDetail({reportDetail}: {reportDetail: ITestReportDetail}) {
    return (
            <div className="report-details-board">
                <div>
                    Duration: {Number(reportDetail.duration/60000).toFixed(2)} m
                </div>
                <div>
                    Branch: {reportDetail.branch}
                </div>
                <div>
                    Commit: {reportDetail.commit}
                </div>
                <div>
                    Job Name: {reportDetail.jobName}
                </div>
                <div>
                    Environment: {reportDetail.environmentUrl}
                </div>
            </div>
    );
}
