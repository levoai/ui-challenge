import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const Title = styled.h1`
  color: white;
  font-size: 15rem;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  color: white;
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
