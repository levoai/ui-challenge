import React from "react";
import { BiTime, BiCalendarAlt, IoCubeOutline, AiOutlineBranches, CgGitCommit, AiOutlineGithub, AiOutlineGlobal } from 'react-icons/all';
import { OrganizationReportDetail } from "../../../../models/OrganizationReportDetail";
import { getMinutesFromMilliseconds } from "../../../../shared/utils";
import './ReportSummary.scss';
import TimeAgo from 'javascript-time-ago';

type ComponentProps = {
  report: OrganizationReportDetail
}

const ReportSummary: React.FunctionComponent<ComponentProps> = ({ report }) => {
  const minutesDuration = getMinutesFromMilliseconds(report.duration);
  const timeAgo = new TimeAgo()
  const endDateParsed = Date.parse(report.endDate);
  const endDateAgo = endDateParsed ? timeAgo.format(endDateParsed) : '';

  return (
    <div className="ReportSummary">
      <div className="summary-item">
        <div className="data">
          <BiTime />
          <span>{`Duration: ${minutesDuration}m`}</span>
        </div>
        <div className="data">
          <BiCalendarAlt />
          <span>{`Finished ${endDateAgo}`}</span>
        </div>
      </div>
      <div className="summary-item">
        <div className="data">
          <IoCubeOutline />
          <span className="purple">{report.jobName}</span>
        </div>
      </div>
      <div className="summary-item">
        <div className="data">
          <AiOutlineBranches />
          <span>{report.branch}</span>
        </div>
        <div className="data">
          <CgGitCommit />
          <span>{report.commit}</span>
        </div>
        <div className="data">
          <AiOutlineGithub />
          <span>{report.githubUser}</span>
        </div>
      </div>
      <div className="summary-item">
        <div className="data">
          <AiOutlineGlobal />
          <span>{report.environmentUrl}</span>
        </div>
      </div>
    </div>
  );
}

export default ReportSummary;
