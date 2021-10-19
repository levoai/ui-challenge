import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GoChevronRight } from 'react-icons/go';
import organizationsApi from '../services/api';
import { COLORS, QueryKeys, SPACING } from '../constants';
import Chip from '../components/Chip';
import ReportDetailCard from '../components/ReportDetailCard';
import ReportEndpointItem from '../components/ReportEndpointItem';
import Collapsible from '../components/Collapsible';
import StatusIcon from '../components/StatusIcon';
import { IEndpoint } from '../types';

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.primary};
`;

const Title = styled.h1`
  margin-top: 0;
  color: ${COLORS.darkInk};
  display: flex;
  align-items: center;

  & > svg {
    margin: ${SPACING / 4}px ${SPACING / 2}px 0;
  }
  & > span {
    margin: 0 ${SPACING / 2}px 0;
  }
`;

const Container = styled.div`
  padding: ${SPACING}px;
`;

const Input = styled.input`
  padding: ${SPACING / 2}px;
  border: 1px solid ${COLORS.darkGray};
  color: ${COLORS.darkInk};
  width: 100%;
  font-size: 1rem;

  &::placeholder {
    color: ${COLORS.lightInk};
  }
`;

const SectionHeading = styled.p`
  color: ${COLORS.darkInk};
  font-weight: 500;

  & > span {
    margin-right: ${SPACING / 3}px;
  }
`;

const renderEndpoints = ({
  endpoints,
  query,
  header,
}: {
  endpoints: IEndpoint[];
  query: string;
  header: React.ReactNode;
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
        <CustomLink to={`/organization/${organizationId}/reports`}>
          Test Reports
        </CustomLink>
        <GoChevronRight />
        {report.jobName}
        <Chip
          icon={
            <StatusIcon
              status={isProcessFailed ? 'FAILURE' : 'SUCCESS'}
              reverse
            />
          }
          color={isProcessFailed ? COLORS.failure : COLORS.success}
          text={isProcessFailed ? 'FAILED' : 'PASSED'}
        />
      </Title>
      <ReportDetailCard {...report} />
      <section>
        <Input
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Filter by endpoint"
        />
        {renderEndpoints({
          endpoints: failedEndpoints,
          header: (
            <SectionHeading>
              <StatusIcon status="FAILURE" />
              {`Failed Tests (${failedEndpoints.length} / ${report.endpoints.length})`}
            </SectionHeading>
          ),
          query,
        })}
        {renderEndpoints({
          endpoints: passedEndpoints,
          header: (
            <SectionHeading>
              <StatusIcon status="SUCCESS" />
              {`Passed Tests (${passedEndpoints.length} / ${report.endpoints.length})`}
            </SectionHeading>
          ),
          query,
        })}
      </section>
    </Container>
  );
};

export default Report;
