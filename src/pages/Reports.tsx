import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import organizationsApi from '../services/api';
import ReportItem from '../components/ReportItem';
import { COLORS, QueryKeys, SPACING } from '../constants';

const ReportLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  color: ${COLORS.darkInk};
`;

const Container = styled.div`
  padding: ${SPACING}px;
`;

const Reports: React.FC = () => {
  const { organizationId } = useParams<{ organizationId: string }>();
  const {
    data: reports,
    error,
    isLoading,
  } = useQuery(
    [QueryKeys.REPORTS, organizationId],
    organizationsApi.getReports,
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>An error has ocurred</h3>;
  }

  if (!reports?.length) {
    return <h3>No data for this organization</h3>;
  }

  return (
    <Container>
      <Title>Test Reports</Title>
      {reports.map((report) => (
        <ReportLink
          key={report.id}
          to={`/organization/${organizationId}/reports/${report.id}`}
        >
          <ReportItem {...report} />
        </ReportLink>
      ))}
    </Container>
  );
};

export default Reports;
