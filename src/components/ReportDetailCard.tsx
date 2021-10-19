import React from 'react';
import styled from 'styled-components';
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {
  GoCalendar,
  GoClock,
  GoGitBranch,
  GoGitCommit,
  GoGlobe,
  GoMarkGithub,
  GoPackage,
} from 'react-icons/go';

import { COLORS, SPACING } from '../constants';
import { IReportDetails } from '../types';

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: ${SPACING}px;
  color: ${COLORS.ink};
  background-color: ${COLORS.gray};
  margin-bottom: ${SPACING}px;
  text-decoration: none;
  width: 40%;
  flex-wrap: wrap;
`;

const Attribute = styled.p`
  display: inline-flex;
  align-items: center;
  margin: 0 ${SPACING}px ${SPACING}px 0;
  font-size: 0.85rem;
  font-weight: 500;

  & > svg {
    margin-right: ${SPACING / 4}px;
  }
`;

type ReportItemProps = Omit<IReportDetails, 'endpoints'>;

const ReportDetailCard: React.FC<ReportItemProps> = ({
  duration,
  endDate,
  commit,
  branch,
  githubUser,
  environmentUrl,
  jobName,
}) => (
  <Card>
    <Attribute>
      <GoClock />
      {`Duration: ${millisecondsToMinutes(duration)}m`}
    </Attribute>
    <Attribute>
      <GoCalendar />
      {`Finished ${formatDistanceToNow(new Date(endDate), {
        addSuffix: true,
      })}`}
    </Attribute>
    <Attribute>
      <GoPackage />
      {jobName}
    </Attribute>
    <Attribute>
      <GoGitBranch />
      {branch}
    </Attribute>
    <Attribute>
      <GoGitCommit />
      {commit}
    </Attribute>
    <Attribute>
      <GoMarkGithub />
      {githubUser}
    </Attribute>
    <Attribute>
      <GoGlobe />
      {environmentUrl}
    </Attribute>
  </Card>
);

export default ReportDetailCard;
