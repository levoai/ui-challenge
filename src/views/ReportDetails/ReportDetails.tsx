import React, { ReactElement, useEffect, useState } from 'react'
import { useParams,} from 'react-router'
import { Link } from 'react-router-dom'
import { TabList, Tabs, Tab, TabPanel, TabPanels, Container, Accordion, Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react"
import { WarningIcon, ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons"
import AccordionElement from '../../components/AccordionElement'
import ExecutionDetails from '../../components/ExecutionDetails'
import { ORGANIZATIONS_QUERY_ENDPOINT } from '../../utils/constants'
import service from '../../services/baseConfig'

export default function ReportDetails(): ReactElement {
  
  const {organizationId, reportId} = useParams()
  const [details, setDetails] = useState<any>({})
  const [successArray, setSuccessArray] = useState <Array<any>>([])
  const [failedArray, setFailedArray] = useState<Array<any>>([])
 
  useEffect(() => {
    (async () => {
      const { data, status} = await service(`${ORGANIZATIONS_QUERY_ENDPOINT}${organizationId}/reports/${reportId}/details.json?key=2e435a20`)
      setDetails(data)
    })()
  },[]);

  useEffect(()=>{
    const success: any= []
    const failed:any = []
    if(details?.endpoints){
      details.endpoints.map((element: any)=>{
        if(element.status==="SUCCESS"){
          success.push(element)
        }else{
          failed.push(element)
        }
      })
      setFailedArray(failed)
      setSuccessArray(success)
    }
  }, [details])

  const failedExecution = failedArray.length> 0

  return (
    <>
    {(details?.endpoints) && (
      <Container maxW="container.lg">
        <Breadcrumb mb={8} mt={8} spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/reports/${organizationId}`}>Test Reports</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Execution #{reportId}</BreadcrumbLink>
          </BreadcrumbItem>
          <Badge alignItems="center" colorScheme={failedExecution ? "red": "green"}>{(failedExecution) ? <><WarningIcon/>Failed</>: <><CheckCircleIcon/>Passed</>}</Badge>
        </Breadcrumb>
        <ExecutionDetails details={details}/>
        <Tabs mt={8}>
          <TabList>
            <Tab>Results</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionElement title={"Failed Test"} passed={false} currentEndpoints={failedArray} totalEndpoints={details?.endpoints.length}/>
                  <AccordionElement title={"Passed Test"} passed={true} currentEndpoints={successArray} totalEndpoints={details?.endpoints.length}/>        
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    )}
    </>   
  )
}
