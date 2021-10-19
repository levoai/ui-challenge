import React from 'react';
import { GoCheck, GoX } from 'react-icons/go';
import styled from 'styled-components';

import { TStatus } from '../types';
import { SPACING, COLORS } from '../constants';

const Icon = styled.span<{
  foregroundColor?: string;
  backgroundColor?: string;
}>`
  padding: ${SPACING / 4}px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ backgroundColor = 'white' }) => backgroundColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ foregroundColor = COLORS.darkGray }) => foregroundColor};
  }
`;

type StatusIconProps = {
  status: TStatus;
  reverse?: boolean; // reverse means the colors are
};
const StatusIcon: React.FC<StatusIconProps> = ({ status, reverse }) => {
  const isFailure = status === 'FAILURE';

  if (isFailure) {
    const backgroundColor = reverse ? 'white' : COLORS.failure;
    const foregroundColor = reverse ? COLORS.failure : 'white';
    return (
      <Icon foregroundColor={foregroundColor} backgroundColor={backgroundColor}>
        <GoX size={10} />
      </Icon>
    );
  }

  const backgroundColor = reverse ? 'white' : COLORS.success;
  const foregroundColor = reverse ? COLORS.success : 'white';
  return (
    <Icon foregroundColor={foregroundColor} backgroundColor={backgroundColor}>
      <GoCheck size={10} />
    </Icon>
  );
};

export default StatusIcon;
