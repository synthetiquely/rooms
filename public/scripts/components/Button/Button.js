import glamorous from 'glamorous';

export const Button = glamorous.button(
  {
    padding: '10px 15px',
    fontSize: '0.9rem',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  ({ type, disabled }) => {
    let styles = {};
    if (!type || type === 'default') {
      styles = {
        ...styles,
        color: '#000',
        backgroundColor: '#E9ECEF',
        ':hover': {
          backgroundColor: '#DDE0E3',
        },
        ':active, :focus': {
          backgroundColor: '#C7CDD3',
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
        ':hover, :active, :focus': {
          color: 'rgba(0,0,0,0.2)',
          backgroundColor: ' #E2E5E8',
        },
      };
    }

    return styles;
  },
);
