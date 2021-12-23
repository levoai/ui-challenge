import React, {MouseEventHandler} from 'react';
import '../App.css';
import {IExecutions} from "../routes/TestReports";
import moment from "moment";

export default function TestReport({execution, onClick}: {execution: IExecutions, onClick: MouseEventHandler}) {
    return (
            <div style={{}} onClick={onClick} className="execution-item">
                <div className="execution-name-date">
                    <div className="execution-name">Execution #{execution.id}: {execution.name}</div>
                    <div className="execution-date">
                        <div>{moment(execution.startDate).fromNow()} - {Math.round(execution.duration/60000)} m</div>
                    </div>
                </div>
                <div className="execution-tests">
                    <div style={{display: 'flex'}}>
                        <div className="execution-passed">{execution.succeedTests} passed</div>
                        <div className="execution-failed">{execution.failedTests} failed</div>
                    </div>
                </div>
            </div>
    );
}
