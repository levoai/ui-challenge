import React, { ReactElement } from 'react'
import { TabList, Tabs, Tab, TabPanel, TabPanels, Container, Accordion, AccordionPanel, AccordionItem,AccordionButton,AccordionIcon, Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react"
import EndpointList from './EndpointList'
import { WarningIcon, CheckCircleIcon } from '@chakra-ui/icons'

interface Props {
  currentEndpoints: Array<object>,
  totalEndpoints: number,
  title: string
  passed: boolean
}

export default function AccordionElement({passed, title, currentEndpoints, totalEndpoints}: Props): ReactElement {

  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {(passed)? <CheckCircleIcon color='green'/>: <WarningIcon color='red'/>} {title} ({currentEndpoints.length}/{totalEndpoints})
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <EndpointList passed={passed} endpoints={currentEndpoints}/>
      </AccordionPanel>
    </AccordionItem>
  )
}
