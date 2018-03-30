import glamorous from 'glamorous';

export const Slot = glamorous.button(
  {
    width: '57px',
    height: '28px',
    color: '#fff',
    fontSize: '1.5rem',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    ':hover': {
      borderRadius: '2px',
      backgroundColor: '#1D54FE',
    },
    ':active, :focus': {
      borderRadius: '2px',
      backgroundColor: '#1D00FE',
    },
  },
  ({ occupied }) => {
    let styles = {};
    if (occupied) {
      styles = {
        backgroundColor: '#D5DFE9',
        color: '#D5DFE9',
        ':hover, :active, :focus': {
          borderRadius: '0',
          backgroundColor: '#98A9B9',
          color: '#98A9B9',
        },
      };
    }
    return styles;
  },
);
