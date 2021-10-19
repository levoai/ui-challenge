import React, { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import styled from 'styled-components';
import { SPACING } from '../constants';

const Header = styled.header`
  display: flex;
  padding: 0 ${SPACING}px 0 0;
  align-items: center;

  & > svg {
    margin-right: ${SPACING}px;
  }
`;

type CollapsibleProps = {
  header: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({ children, header }) => {
  const [show, setShow] = useState(true);

  const toggle = () => setShow((currentValue) => !currentValue);
  return (
    <div>
      <Header
        tabIndex={0}
        role="switch"
        aria-checked={show}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'ENTER') {
            toggle();
          }
        }}
      >
        {show ? <GoChevronUp /> : <GoChevronDown />}
        {header}
      </Header>
      {show && children}
    </div>
  );
};

export default Collapsible;
