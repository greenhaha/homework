import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Card } from '@repo/ui';

export default function Dashboard() {
  return (
    <Box>
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <Card>
          <Heading size="md" mb={2}>
            Welcome
          </Heading>
          <Text>This is a Turborepo template with React, TypeScript, and Chakra UI.</Text>
        </Card>
        <Card>
          <Heading size="md" mb={2}>
            Features
          </Heading>
          <Text>Built with modern tools and best practices.</Text>
        </Card>
        <Card>
          <Heading size="md" mb={2}>
            Getting Started
          </Heading>
          <Text>Start building your application by editing the pages.</Text>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
