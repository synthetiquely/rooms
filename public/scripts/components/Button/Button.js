import glamorous from 'glamorous';

export const Button = glamorous.button(
  {
    padding: '10px 15px',
    fontSize: '0.9rem',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
  },
  ({ type, disabled }) => {
    let styles = {};
    if (!type || type === 'default') {
      styles = {
        ...styles,
        color: '#000',
        backgroundColor: '#E9ECEF',
        ':hover': {
          backgroundColor: '#E9ECEF',
        },
        ':active, :focus': {
          backgroundColor: '#E9ECEF',
        },
      };
    }

    if (type === 'primary') {
      styles = {
        color: '#fff',
        backgroundColor: '#007DFF',
        ':hover': {
          backgroundColor: '#0059FF',
        },
        ':active, :focus': {
          backgroundColor: '#0059FF',
        },
      };
    }

    if (disabled) {
      styles = {
        color: 'rgba(0,0,0,0.2)',
        backgroundColor: ' #E2E5E8',
      };
    }

    return styles;
  },
);
