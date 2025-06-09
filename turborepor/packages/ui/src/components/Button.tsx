import { Button as ChakraButton } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import type React from 'react';

export interface ButtonProps extends ChakraButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  as?: React.ElementType;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  return <ChakraButton variant={variant} {...props} />;
};
