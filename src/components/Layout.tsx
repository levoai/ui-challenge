import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

import { COLORS, SPACING } from '../constants';

const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Header = styled.header`
  padding: ${SPACING}px;
  background-color: ${COLORS.primary};
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
