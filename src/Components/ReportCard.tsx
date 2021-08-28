import React from "react";
import { Link } from "react-router-dom";
import "./ReportCard.css";

type CardProps = {
    orgId: string,
    reportId: number,
    name: string;
    failed_tests: number;
    succeed_tests: number;
    duration: number;
    start_date: Date;
  }


const Reportcard = ({ orgId, reportId, name, start_date, duration, succeed_tests, failed_tests} : CardProps) => {

    return (
        <Link  to={`/organizations/${orgId}/reports/${reportId}`} className="report-card" key={reportId}>
            <div >
                <h1>{name}</h1>
                <div>
                    <div>{start_date}</div>
                    <div>- {duration} long</div>
                </div>
            </div>
            <div className='flexbox flex-row space-around'>
                <p className='reporter green margin-10'>{`${succeed_tests} Test Passed`}</p>
                <p className='reporter red margin-10'>{`${failed_tests} Failed Test`}</p>             
            </div>
        </Link>
    );
};

export default Reportcard;