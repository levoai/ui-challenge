import React from 'react';
import styled from 'styled-components';
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { COLORS, SPACING } from '../constants';
import { IReportDetails } from '../types';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${SPACING}px;
  color: ${COLORS.ink};
  background-color: ${COLORS.gray};
  margin-bottom: ${SPACING}px;
  text-decoration: none;
  width: 100%;
`;

const Name = styled.p`
  text-align: center;
`;

const Extra = styled.p`
  text-align: center;
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
    <Name>{`${millisecondsToMinutes(duration)}m`}</Name>
    <Name>{formatDistanceToNow(new Date(endDate), { addSuffix: true })}</Name>
    <Extra>{jobName}</Extra>
    <Extra>{branch}</Extra>
    <Extra>{commit}</Extra>
    <Extra>{githubUser}</Extra>
    <Extra>{environmentUrl}</Extra>
  </Card>
);

export default ReportDetailCard;
