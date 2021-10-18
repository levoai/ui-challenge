import React from 'react';
import { Route, Switch, useParams } from 'react-router';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import organizationsApi from '../services/api';
import { QueryKeys, SPACING } from '../constants';
import Layout from '../components/Layout';
import { Report, Reports } from '.';

const Aside = styled.aside`
  padding: ${SPACING}px;
  height: 100vh;
  width: 300px;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Section = styled.section`
  flex: 1;
  border: 1px solid red;
`;

const Main = styled(Layout)`
  display: flex;
`;

const Organization: React.FC = () => {
  const { organizationId } = useParams<{ organizationId: string }>();
  const {
    data: organization,
    error,
    isLoading,
  } = useQuery(
    [QueryKeys.ORGANIZATION, organizationId],
    organizationsApi.getOrganization,
  );

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  if (error) {
    return <Layout>An error has ocurred</Layout>;
  }

  if (!organization) {
    return <Layout>No data for this organization</Layout>;
  }

  return (
    <Main>
      <Aside>
        <img src={organization.ownerPicture} alt="organization" />
        <p>{organization.name}</p>
        <p>{organization.ownerEmail}</p>
        <p>{organization.ownerName}</p>
      </Aside>
      <Section>
        <Switch>
          <Route
            exact
            path="/organization/:organizationId/reports"
            component={Reports}
          />
          <Route
            path="/organization/:organizationId/reports/:reportId"
            component={Report}
          />
        </Switch>
      </Section>
    </Main>
  );
};

export default Organization;
