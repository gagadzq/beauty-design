import React from 'react';
import './button.css';
import { ButtonProps } from './type';
  
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
    >=
    </button>
  );
};
