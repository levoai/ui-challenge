import React from 'react';
import { render } from '@testing-library/react';

import OrganizationCard from './OrganizationCard';
import { IOrganization } from '../types';

const organization: IOrganization = {
  id: '1',
  name: 'Org',
  ownerEmail: 'owner@gmail.com',
  ownerName: 'Owen',
  ownerPicture: 'https://picsum.photos/200/300',
};

describe('OrganizationCard', () => {
  test('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <OrganizationCard {...organization} />,
    );
    getByText(organization.name);
    getByText(organization.ownerEmail);
    getByText(organization.ownerName);
    getByAltText('owner');
  });
});
