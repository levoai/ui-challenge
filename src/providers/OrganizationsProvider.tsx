import React , { createContext, useContext, useState, FC } from "react";


const OrganizationContext = createContext<any>(undefined)

const OrganizationsProvider: FC = ({children})=>{
  const [organizations, setOrganizations] = useState([])
  const [reports, setReports] = useState([])
  const value = {reports, setReports, organizations, setOrganizations}
  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganizationContext = ()=>{
  return useContext(OrganizationContext)
}

export default OrganizationsProvider