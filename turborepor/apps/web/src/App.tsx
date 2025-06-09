import { Routes, Route, Link } from 'react-router-dom';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Button } from '@repo/ui';

type PageModule = { default: React.ComponentType };

const pages = import.meta.glob<PageModule>('./pages/*.tsx', { eager: true });

const routes = Object.entries(pages).map(([path, component]) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1] || '';
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    path: name === 'index' ? '/' : `/${name.toLowerCase()}`,
    component: component.default,
  };
});

export default function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Box as="nav" bg="white" boxShadow="sm">
        <Container maxW="container.xl">
          <Flex h="16" alignItems="center" justifyContent="space-between">
            <Heading size="md">Turborepo Template</Heading>
            <Flex gap={4}>
              {routes.map(({ name, path }) => (
                <Button key={path} as={Link} to={path} variant="outline" size="sm">
                  {name}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Container>
    </Box>
  );
}
