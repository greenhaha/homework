import { ButtonProps as ButtonProps$1, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps extends ButtonProps$1 {
    variant?: 'primary' | 'secondary' | 'outline';
    as?: React.ElementType;
    to?: string;
}
declare const Button: React.FC<ButtonProps>;

interface CardProps extends BoxProps {
    children: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

export { Button, type ButtonProps, Card, type CardProps };
