import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        primary: {
          bg: 'blue.500',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
        },
        secondary: {
          bg: 'gray.500',
          color: 'white',
          _hover: {
            bg: 'gray.600',
          },
        },
        outline: {
          borderColor: 'blue.500',
          color: 'blue.500',
          _hover: {
            bg: 'blue.50',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        p: 4,
        bg: 'white',
        borderRadius: 'lg',
        boxShadow: 'md',
      },
    },
  },
});

export default theme; 