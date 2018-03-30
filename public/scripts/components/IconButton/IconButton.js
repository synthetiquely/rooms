import React from 'react';
import glamorous from 'glamorous';
import { Icon } from '../Icon/Icon';

const Button = glamorous.button({
  width: '24px',
  height: '24px',
  outline: 'none',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
});

export const IconButton = ({ type, ...rest }) => (
  <Button {...rest}>
    <Icon type={type} />
  </Button>
);
