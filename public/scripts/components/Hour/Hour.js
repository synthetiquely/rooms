import glamorous from 'glamorous';

export const Hour = glamorous.div({
  flex: '1',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '100%',
    left: '50%',
    width: '0',
    height: 'calc(100vh - 60px)',
    borderLeft: '1px solid rgba(19,100,205,0.1)',
  },
});
