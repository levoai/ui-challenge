import React from "react";

type ComponentProps = {
  breadcrumbItems: Array<any>
}

export const Breadcrumb: React.FunctionComponent<ComponentProps> = ({breadcrumbItems}) => {
  
  return (
    <ul className="App-breadcrumb">
      {
        breadcrumbItems.map((breadcrumbItem: any) => breadcrumbItem.isLink 
          ? <li><a href="#">{breadcrumbItem.name}</a></li> 
          : <li>{breadcrumbItem.name}</li>)
      }
    </ul>
  );
}
