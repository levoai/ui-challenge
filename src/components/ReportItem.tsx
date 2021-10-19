import React from 'react';
import styled from 'styled-components';
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { COLORS, SPACING } from '../constants';
import { IReport } from '../types';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(75px, auto) minmax(75px, auto);
  grid-template-rows: auto auto;
  gap: 0px 0px;
  grid-template-areas:
    '. passed failed'
    '. passed failed';
  align-items: center;
  padding: ${SPACING}px;
  color: ${COLORS.ink};
  background-color: ${COLORS.gray};
  margin-bottom: ${SPACING}px;
  text-decoration: none;
  width: 100%;
  font-weight: 500;
`;

const Details = styled.div`
  font-weight: 500;
`;

const Title = styled.p`
  font-size: 1.3rem;
  margin: 0 0 ${SPACING / 2}px;
`;

const Subtitle = styled.p`
  margin: 0;
`;

const Failed = styled.p`
  grid-area: failed;
  color: ${COLORS.failure};
  text-align: right;
`;

const Passed = styled.p`
  grid-area: passed;
  margin: 0 ${SPACING}px;
  color: ${COLORS.success};
  text-align: right;
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
    <Details>
      <Title>{name}</Title>
      <Subtitle>{`${formatDistanceToNow(new Date(startDate), {
        addSuffix: true,
      })} - ${millisecondsToMinutes(duration)}m long`}</Subtitle>
    </Details>
    <Passed>{succeedTests} passed</Passed>
    <Failed>{failedTests} failed</Failed>
  </Card>
);

export default ReportItem;
