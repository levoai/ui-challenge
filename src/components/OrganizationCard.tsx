import { Link } from "react-router-dom";
import { routes } from "../router";
import { OrganizationProps } from "../types";

export function OrganizationCard({
  organization: {
    id,
    name,
    owner_picture: ownerPicture,
  },
}: OrganizationProps) {
  return (
    <Link
      to={routes.organization.replace(":id", id.toString())}
      className="border-2 border-coolGray-500 px-4 py-2 md:px-12 md:py-8 bg-blueGray-400 hover:bg-blueGray-500 flex justify-between items-center"
    >
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={ownerPicture}
        alt="Company"
      />
      <span className="text-2xl font-bold text-white">{name}</span>
      <span className="w-12"></span>
    </Link>
  );
};

export default OrganizationCard;
