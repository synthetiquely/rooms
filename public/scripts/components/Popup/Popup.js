import React from 'react';
import { createPortal } from 'react-dom';
import glamorous from 'glamorous';

const Window = glamorous.div({
  minWidth: '340px',
  minHeight: '120px',
  zIndex: '2',
  margin: 'auto',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 1px rgba(0,44,92,0.28)',
});

// TODO: Need to finish Popup component
export const Popup = props =>
  createPortal(<Window>{props.children}</Window>, props.node);
