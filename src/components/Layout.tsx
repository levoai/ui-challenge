import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

import { SPACING } from '../constants';

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: ${SPACING}px;
`;

type LayoutProps = {
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ className, children }) => (
  <Page>
    <Header>
      <img src={logo} alt="app logo" />
    </Header>
    <main className={className}>{children}</main>
  </Page>
);
export default Layout;
