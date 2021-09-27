import React from "react";

type ComponentProps = {
  data: Array<any>
}

export const Breadcrumb: React.FunctionComponent<ComponentProps> = ({data}) => {
  
  return (
    <ul className="App-breadcrumb">
      {
        data.map((item: any) => item.isLink ? <li><a href="#">{item.name}</a></li> : <li>{item.name}</li>)
      }
    </ul>
  );
}
