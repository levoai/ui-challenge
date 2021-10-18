import React from 'react';
import styled from 'styled-components';

import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import OrganizationCard from '../components/OrganizationCard';
import Layout from '../components/Layout';
import { IOrganization } from '../types';
import { QueryKeys } from '../constants';
import organizationsApi from '../services/api';

const OrganizationLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
`;

const Subtitle = styled.h2`
  color: white;
`;

const Main = styled(Layout)`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      {(organizations as IOrganization[]).map((organization) => (
        <OrganizationLink
          key={organization.id}
          to={`/organization/${organization.id}/reports`}
        >
          <OrganizationCard {...organization} />
        </OrganizationLink>
      ))}
    </Main>
  );
};

export default Home;
