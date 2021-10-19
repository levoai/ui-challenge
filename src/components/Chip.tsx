import React from 'react';
import styled from 'styled-components';
import { COLORS, SPACING } from '../constants';

const ChipContainer = styled.span<{ color: string }>`
  padding: ${SPACING / 3}px ${SPACING / 2}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 2rem;
  flex-grow: 0;
  color: white;
  width: fit-content;
  font-size: 1rem;
  opacity: 0.7;
  margin: 0 ${SPACING / 4}px;
  font-weight: 500;

  & span {
    margin-right: ${SPACING / 4}px;
  }
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
