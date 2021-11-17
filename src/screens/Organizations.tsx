import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { Header } from "../components";
import { OrganizationCard } from "../components/OrganizationCard";
import { organizationState } from "../state/organizationsState";
import { IOrganization } from "../types";

export const Organizations: React.FunctionComponent = () => {
  const { contents, state } = useRecoilValueLoadable(organizationState);

  const organizations: IOrganization[] = contents;

  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center">
        <h1 className="text-purple-800 text-3xl font-bold">Organizations</h1>
        <br />
        <p className=" text-fuchsia-600 text-lg font-medium">Pick the organization you want to access to</p>
        {state === "loading" || state === "hasError" ? null : (
          <div className="flex flex-col gap-8 py-16 w-full px-8 md:w-1/2 md:px-0">
            {organizations.map((organization) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Organizations;
