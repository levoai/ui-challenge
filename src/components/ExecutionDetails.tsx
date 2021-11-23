import React, { ReactElement } from 'react'
import { Box, Stack, HStack, Text } from '@chakra-ui/layout'

interface Props {
  details: any
}

export default function ExecutionDetails({details}: Props): ReactElement {
  const duration = Math.ceil(details.duration/60000)
  return (
    <Box maxW="lg" padding="20px" fontWeight={600} borderRadius="lg" overflow="hidden" backgroundColor="ghostwhite">
      <Stack>
        <HStack>
          <Text>Duration: {duration} m</Text>
          <Text>Finished: {new Date(details.end_date).toLocaleDateString("en-US")}</Text>
        </HStack>
        <HStack>
          <Text>job: {details.job_name}</Text>
        </HStack>
        <HStack>
          <Text>{details.branch}</Text>
          <Text>{details.commit}</Text>
          <Text>{details.github_user}</Text>
        </HStack>
        <HStack>
          <Text>{details.environment_url}</Text>
        </HStack>
      </Stack>
    </Box>
  )
}
