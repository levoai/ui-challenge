import React, { ReactElement, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Badge, Heading, Flex, Container, HStack, Text} from "@chakra-ui/react"
import { timeSince } from '../../utils/date'
import { ORGANIZATIONS_QUERY_ENDPOINT } from '../../utils/constants'
import service from '../../services/baseConfig'
import { useOrganizationContext } from '../../providers/OrganizationsProvider'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Reports(): ReactElement {
  const {reports, setReports} = useOrganizationContext()
  const navigate = useNavigate()
  const {organizationId = 0} = useParams() 
  useEffect(() => {
    if(reports.length === 0){
      (async () => {
        try{
          const { data, status} = await service(`${ORGANIZATIONS_QUERY_ENDPOINT}${organizationId}/reports.json?key=2e435a20`)
          if(status === 200) setReports(data)
        }catch(error){
          console.log(error)
        }
      })()
    }    
  },[]);

  const openReportDetails = (reportId: number)=> {
    navigate(`/reports/${organizationId}/${reportId}`);
  }

  return (

    <Container maxW="container.lg">
      <Breadcrumb mb={8} mt={8} spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/`}>Home</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      <Heading as="h2" size="lg" mt={8}>Test Reports</Heading>
      {reports.map((element: any)=>
          <Flex cursor="pointer" onClick={()=>openReportDetails(element.id)} key={element.id} mb={4} mt={8} backgroundColor="aliceblue" alignItems="space-between" padding="10px" justifyContent="space-between" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Stack>
              <div>Execution #{element.id}</div>
              <div>{timeSince(element.start_date)} ago - {Math.ceil(element.duration/60000)}m long </div>
            </Stack>
            <HStack spacing="20px">
              <Text color="green">{element.succeed_tests} passed</Text>
              <Text color="tomato">{element.failed_tests} failed</Text>
            </HStack>           
          </Flex>
        )}
    </Container>
  )
}
