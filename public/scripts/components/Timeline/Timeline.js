import glamorous from 'glamorous';

export const Timeline = glamorous.div({
  display: 'flex',
  '&::before': {
    display: 'block',
    content: "''",
    width: 'calc(100% / 32)',
    backgroundColor: 'red',
  },
  '&::after': {
    display: 'block',
    content: "''",
    width: 'calc(100% / 32)',
    backgroundColor: 'red',
  },
});
