import React from "react";

type ComponentProps = {
  breadcrumbItems: Array<any>
}

export const Breadcrumb: React.FunctionComponent<ComponentProps> = ({breadcrumbItems}) => {
  
  return (
    <ul className="App-breadcrumb">
      {
        breadcrumbItems.map((breadcrumbItem: any) => breadcrumbItem.isLink 
          ? <li key={breadcrumbItem.id}><a href="#">{breadcrumbItem.name}</a></li> 
          : <li key={breadcrumbItem.id}>{breadcrumbItem.name}</li>)
      }
    </ul>
  );
}
