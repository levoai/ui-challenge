import React from 'react';
import styled from 'styled-components';

import { COLORS, SPACING } from '../constants';
import { IEndpoint, TStatus } from '../types';

const Card = styled.div<{ status: TStatus }>`
  padding: ${SPACING}px;
  border-left: 2px solid
    ${({ status }) => (status === 'FAILURE' ? COLORS.failed : COLORS.success)};
  background-color: ${COLORS.gray};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const EndpointName = styled.p`
  margin: 0 ${SPACING}px 0 0;
  color: ${COLORS.ink};
`;

const EndpointTime = styled.p`
  margin: 0;
  color: ${COLORS.lightInk};
`;

type ReportEndpointItemProps = IEndpoint;

const ReportEndpointItem: React.FC<ReportEndpointItemProps> = ({
  status,
  duration,
  url,
}) => (
  <Card status={status}>
    <EndpointName>{url}</EndpointName>
    <EndpointTime>{`${duration}s`}</EndpointTime>
  </Card>
);

export default ReportEndpointItem;
