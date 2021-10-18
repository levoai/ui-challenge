import React from 'react';
import styled from 'styled-components';
import { COLORS, SPACING } from '../constants';

const ChipContainer = styled.span<{ color: string }>`
  padding: ${SPACING / 3}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 2rem;
  flex-grow: 0;
  color: white;
  width: fit-content;
`;

type ChipProps = {
  icon?: React.ReactChild;
  text: string;
  color?: string;
};

const Chip: React.FC<ChipProps> = ({ icon, text, color = COLORS.primary }) => (
  <ChipContainer color={color}>
    {icon}
    {text}
  </ChipContainer>
);

export default Chip;
