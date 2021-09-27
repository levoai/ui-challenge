import React from "react";
import { Logo } from "./Logo";

type ComponentProps = {
  organizationName: string
}

export const MainMenu: React.FunctionComponent<ComponentProps> = ({organizationName}) => {
  return <div className="App-menu">
    <Logo />
    <p>{organizationName}</p>
    <ul className="Menu">
      <li>Tests</li>
    </ul>
  </div>;
}
