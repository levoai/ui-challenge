import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import organizationsApi from '../services/api';
import { COLORS, QueryKeys, SPACING } from '../constants';
import Chip from '../components/Chip';
import ReportDetailCard from '../components/ReportDetailCard';
import ReportEndpointItem from '../components/ReportEndpointItem';
import Collapsible from '../components/Collapsible';
import { IEndpoint } from '../types';

const Title = styled.h1`
  margin-top: 0;
  color: white;
`;

const Container = styled.div`
  padding: ${SPACING}px;
`;

const renderEndpoints = ({
  endpoints,
  query,
  header,
}: {
  endpoints: IEndpoint[];
  query: string;
  header: string;
}) =>
  !!endpoints.length && (
    <Collapsible header={header}>
      {endpoints
        .filter(({ url }) => url.includes(query))
        .map((endpoint) => (
          <ReportEndpointItem key={endpoint.url} {...endpoint} />
        ))}
    </Collapsible>
  );

const Report: React.FC = () => {
  const { organizationId, reportId } =
    useParams<{ organizationId: string; reportId: string }>();
  const {
    data: report,
    error,
    isLoading,
  } = useQuery(
    [QueryKeys.REPORT, organizationId, reportId],
    organizationsApi.getReport,
  );
  const [query, setQuery] = useState<string>('');

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>An error has ocurred</h3>;
  }

  if (!report) {
    return <h3>No data for this report</h3>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const isProcessFailed = report.endpoints.some(
    ({ status }) => status === 'FAILURE',
  );

  const failedEndpoints = report.endpoints.filter(
    (endpoint) => endpoint.status === 'FAILURE',
  );

  const passedEndpoints = report.endpoints.filter(
    (endpoint) => endpoint.status === 'SUCCESS',
  );

  return (
    <Container>
      <Title>
        <Link to={`/organization/${organizationId}/reports`}>
          {' '}
          Test Reports
        </Link>
        {' > '}
        {report.jobName}{' '}
        <Chip
          color={isProcessFailed ? COLORS.failed : COLORS.success}
          text={isProcessFailed ? 'FAILED' : 'PASSED'}
        />
      </Title>
      <ReportDetailCard {...report} />
      <section>
        <input name="query" value={query} onChange={handleChange} />
        {renderEndpoints({
          endpoints: failedEndpoints,
          header: `Failed Tests (${failedEndpoints.length} / ${report.endpoints.length})`,
          query,
        })}
        {renderEndpoints({
          endpoints: passedEndpoints,
          header: `Passed Tests (${passedEndpoints.length} / ${report.endpoints.length})`,
          query,
        })}
      </section>
    </Container>
  );
};

export default Report;
