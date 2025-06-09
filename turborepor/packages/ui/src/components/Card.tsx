import { Box } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import type React from 'react';

export interface CardProps extends BoxProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <Box as="div" {...props}>
      {children}
    </Box>
  );
};
