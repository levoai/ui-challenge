import React from 'react';
import styled from 'styled-components';

import { COLORS, SPACING } from '../constants';
import { IOrganization } from '../types';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: ${SPACING}px;
  color: ${COLORS.ink};
  background-color: ${COLORS.gray};
  text-align: center;
`;

const Picture = styled.img`
  max-width: 90%;
`;

const OrganizationName = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0;
`;

const Email = styled.p`
  font-size: 0.9rem;
  margin-top: ${SPACING / 3}px;
`;

const Name = styled.p`
  margin-bottom: 0;
`;

type OrganizationCardProps = IOrganization;

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  name,
  ownerPicture,
  ownerEmail,
  ownerName,
}) => (
  <Card>
    <Picture src={ownerPicture} alt="owner" />
    <OrganizationName>{name}</OrganizationName>
    <Name>{ownerName}</Name>
    <Email>{ownerEmail}</Email>
  </Card>
);

export default OrganizationCard;
