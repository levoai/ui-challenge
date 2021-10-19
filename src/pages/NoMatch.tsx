import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { COLORS } from '../constants';

const Title = styled.h1`
  color: ${COLORS.ink};
  font-size: 15rem;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  color: ${COLORS.ink};
`;

const Main = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoMatch: React.FC = () => (
  <Main>
    <Title>404</Title>
    <Subtitle>Please check the url and try again.</Subtitle>
  </Main>
);

export default NoMatch;
