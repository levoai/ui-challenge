import {OrganizationOwner} from './OrganizationOwner';
export type Organization = {
  id: number,
  name: string,
  owner: OrganizationOwner,
}