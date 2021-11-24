import React from 'react';
import { Organization } from './views/Organization';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reports } from './views/Reports';
import { ReportDetails } from './views/ReportDetails';
import OrganizationsProvider from './providers/OrganizationsProvider';

export const App: React.FunctionComponent = () => {
  return (
    <ChakraProvider>
      <OrganizationsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Organization/>} />
            <Route path="/reports/:organizationId" element={<Reports />} />
            <Route path="/reports/:organizationId/:reportId" element={<ReportDetails />} />
          </Routes>
        </BrowserRouter>
      </OrganizationsProvider>
    </ChakraProvider>
  );
}

export default App;
