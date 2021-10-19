import React from 'react';
import styled from 'styled-components';

import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import OrganizationCard from '../components/OrganizationCard';
import Layout from '../components/Layout';
import { IOrganization } from '../types';
import { COLORS, QueryKeys, SPACING } from '../constants';
import organizationsApi from '../services/api';

const Title = styled.h1`
  color: ${COLORS.darkInk};
`;

const Subtitle = styled.h2`
  margin: 0 0 ${SPACING * 2}px;
  color: ${COLORS.darkInk};
`;

const Main = styled(Layout)`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  gap: ${SPACING}px ${SPACING}px;
`;

const OrganizationLink = styled(Link)`
  text-decoration: none;
`;

const Home: React.FC = () => {
  const {
    data: organizations,
    error,
    isLoading,
  } = useQuery(QueryKeys.ORGANIZATIONS, organizationsApi.getOrganizations);

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  if (error) {
    return <Layout>An error has ocurred</Layout>;
  }

  return (
    <Main>
      <Title>Organizations</Title>
      <Subtitle>Pick the organization you want to access to</Subtitle>
      <Container>
        {(organizations as IOrganization[]).map((organization) => (
          <OrganizationLink
            key={organization.id}
            to={`/organization/${organization.id}/reports`}
          >
            <OrganizationCard {...organization} />
          </OrganizationLink>
        ))}
      </Container>
    </Main>
  );
};

export default Home;
