import React from 'react';
import { createPortal } from 'react-dom';
import glamorous from 'glamorous';
import { Backdrop } from './Backdrop';

const Window = glamorous.div({
  minWidth: '445px',
  minHeight: '230px',
  zIndex: '2',
  margin: 'auto',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 1 rgba(0,44,92,0.28)',
});

export const Modal = props =>
  createPortal(
    <Backdrop onClose={props.onClose}>
      <Window>{props.children}</Window>
    </Backdrop>,
    document.getElementById('app'),
  );
