import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { Card } from '@repo/ui';

export default function About() {
  return (
    <Box>
      <Heading mb={6}>About</Heading>
      <VStack spacing={6} align="stretch">
        <Card>
          <Heading size="md" mb={4}>
            About This Template
          </Heading>
          <Text>
            This is a modern web application template built with Turborepo, React, TypeScript, and
            Chakra UI. It provides a solid foundation for building scalable web applications with a
            focus on developer experience and performance.
          </Text>
        </Card>
        <Card>
          <Heading size="md" mb={4}>
            Technologies
          </Heading>
          <Text>The template uses a variety of modern technologies and tools:</Text>
          <Text mt={2}>
            • Turborepo for monorepo management
            <br />• React for UI development
            <br />• TypeScript for type safety
            <br />• Chakra UI for component styling
            <br />• Vite for fast development and building
            <br />• React Router for client-side routing
            <br />• Vitest for testing
          </Text>
        </Card>
      </VStack>
    </Box>
  );
}
