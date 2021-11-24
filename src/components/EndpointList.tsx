import React, { ReactElement } from 'react'
import { Text, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react"


interface Props {
  endpoints: Array<object>,
  passed: boolean
}

export default function EndpointList({passed,endpoints}: Props): ReactElement {
  const borderLine = {
    borderLeftWidth: "3px",
    borderLeftColor: passed ? "green" : "red"
  }
  return (
    <>
      {endpoints.map((element: any)=>(
        <Flex cursor="pointer" {...borderLine} key={element.id} mb={4} mt={4} backgroundColor="aliceblue" alignItems="space-between" padding="10px" justifyContent="space-between" overflow="hidden">
          <Text>GET {element.url}</Text>
          <Text>{Math.ceil(element.duration / 1000)} s</Text> 
        </Flex>
      ))}
    </>
  )
}
