import React from 'react';
import { ButtonProps } from './type';
import './index.scss'
  
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
