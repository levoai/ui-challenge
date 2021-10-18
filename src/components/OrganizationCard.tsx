import React from 'react';
import styled from 'styled-components';
import { GrOrganization } from 'react-icons/gr';

import { COLORS, SPACING } from '../constants';
import { IOrganization } from '../types';

const ICON_SIZE = 42;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${SPACING}px;
  color: white;
  background-color: ${COLORS.failed};
  margin-bottom: ${SPACING}px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACING / 3}px;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: 50%;
  background-color: white;
  margin-left: ${SPACING}px;
`;

const Name = styled.p`
  text-align: center;
`;

const Extra = styled.p`
  text-align: center;
`;

type OrganizationCardProps = IOrganization;

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  name,
  ownerPicture,
  ownerEmail,
  ownerName,
}) => (
  <Card>
    <Icon>
      <GrOrganization color={COLORS.lightInk} />
    </Icon>
    <Name>{name}</Name>
    <img src={ownerPicture} alt="owner" />
    <Extra>{ownerEmail}</Extra>
    <Extra>{ownerName}</Extra>
  </Card>
);

export default OrganizationCard;
