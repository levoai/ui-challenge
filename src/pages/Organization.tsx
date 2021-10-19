import React from 'react';
import { Route, Switch, useParams } from 'react-router';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import organizationsApi from '../services/api';
import { COLORS, QueryKeys, SPACING } from '../constants';
import Layout from '../components/Layout';
import { Report, Reports } from '.';

const Aside = styled.aside`
  padding: ${SPACING}px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: ${COLORS.primary};
`;

const AsidePicture = styled.img`
  max-width: 90%;
`;

const AsideOrganization = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0%;
`;

const AsideAuthor = styled.p`
  margin-bottom: 0;
`;

const AsideEmail = styled.p`
  font-size: 0.9rem;
  margin-top: ${SPACING / 3}px;
`;

const Section = styled.section`
  flex: 1;
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
        <AsidePicture src={organization.ownerPicture} alt="organization" />
        <AsideOrganization>{organization.name}</AsideOrganization>
        <AsideAuthor>{organization.ownerName}</AsideAuthor>
        <AsideEmail>{organization.ownerEmail}</AsideEmail>
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
