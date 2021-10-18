import React from 'react';
import styled from 'styled-components';
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { COLORS, SPACING } from '../constants';
import { IReport } from '../types';

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

type ReportItemProps = IReport;

const ReportItem: React.FC<ReportItemProps> = ({
  name,
  duration,
  succeedTests,
  failedTests,
  startDate,
}) => (
  <Card>
    <Name>{name}</Name>
    <Extra>{`${millisecondsToMinutes(duration)}m long`}</Extra>
    <Extra>
      {formatDistanceToNow(new Date(startDate), { addSuffix: true })}
    </Extra>
    <Extra>{succeedTests}</Extra>
    <Extra>{failedTests}</Extra>
  </Card>
);

export default ReportItem;
