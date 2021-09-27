import React from "react";
import "./TestReportTile.scss";

import { OrganizationReport } from "../../../../models/OrganizationReport";
import { getMinutesFromMilliseconds } from '../../../../shared/utils';
import TimeAgo from 'javascript-time-ago';

interface Props {
  report: OrganizationReport
}

const TestReportTile = ({report}: Props) => {
  const minutes = getMinutesFromMilliseconds(report.duration);
  const timeAgo = new TimeAgo()
  const timeAgoFormatted = timeAgo.format(Date.parse(report.startDate));

  return (
    <div className="TestReportTile">
      <div className="title-container">
        <h3>{report.name}</h3>
        <span className="time-ago">{timeAgoFormatted} - {`${minutes}m long`}</span>
      </div>
      <div className="tests-container">
        <span className="success">{`${report.succeedTests} passed`}</span>
        <span className="failed">{`${report.failedTests} failed`}</span>
      </div>
    </div>
  );
}

export default TestReportTile;
