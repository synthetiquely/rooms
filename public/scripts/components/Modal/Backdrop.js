import glamorous from 'glamorous';

export const Backdrop = glamorous.div({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  zIndex: '1',
  overflow: 'hidden',
  backgroundColor: 'rgba(0,16,33,0.40)',
});
