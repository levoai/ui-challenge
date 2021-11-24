import React, { ReactElement, useEffect, useState } from 'react'
import { Heading, Container } from "@chakra-ui/react"
import { ORGANIZATIONS_ENDPOINT } from '../../utils/constants';
import { Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import service from '../../services/baseConfig';
import { useOrganizationContext } from '../../providers/OrganizationsProvider';

export default function Organization(): ReactElement {
  const navigate = useNavigate()
  const {organizations, setOrganizations} = useOrganizationContext()
 
  useEffect(() => {
    if(organizations.length === 0) {
      (async () => {
        const { data, status} = await service(ORGANIZATIONS_ENDPOINT)
        setOrganizations(data)
      })()
    }    
  },[]);
  
  const openReports = (organizationId: number)=> {
    navigate(`/reports/${organizationId}`);
  }
  return (
    <Container alignItems="center">
      <Heading textAlign="center">Organizations</Heading>
      <Flex direction="column" mt={4}>
        {organizations.map((element: any)=>
          <Button onClick={() => openReports(element.id)} mb={8} alignItems="center" padding="40px" justifyContent="center" borderWidth="1px" borderRadius="lg" overflow="hidden">
            {element.name}
          </Button>
        )}
      </Flex>
    </Container>
  )
}
