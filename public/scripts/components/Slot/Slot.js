import glamorous from 'glamorous';

export const Slot = glamorous.button(
  {
    width: 'calc(100% / 16)',
    height: '28px',
    padding: '0',
    color: '#fff',
    fontSize: '1.5rem',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    ':hover': {
      borderRadius: '2px',
      backgroundColor: '#1D54FE',
    },
    ':active, :focus': {
      borderRadius: '2px',
      backgroundColor: '#1D00FE',
    },
  },
  ({ occupied, hours }) => {
    let styles = {};
    if (occupied) {
      styles = {
        ...styles,
        backgroundColor: '#D5DFE9',
        color: '#D5DFE9',
        ':hover, :active, :focus': {
          borderRadius: '0',
          backgroundColor: '#98A9B9',
          color: '#98A9B9',
        },
      };
    }

    if (hours) {
      styles = {
        ...styles,
        width: `calc(100% / 16 * ${hours})`,
      };
    }
    return styles;
  },
);
