import glamorous from 'glamorous';

export const Title = glamorous.h1(
  {
    margin: '0',
    fontSize: '1.2rem',
    fontWeight: '600',
    lineHeight: '17px',
    color: '#000',
    ':hover': {
      fontWeight: '600',
      color: '#0070E0',
    },
    ':active, :focus': {
      fontWeight: '600',
      color: '#1D54FE',
    },
  },
  ({ disabled }) => {
    let styles = {};

    if (disabled) {
      styles = {
        fontWeight: '600',
        color: '#858E98',
        ':hover, :active, :focus': {
          color: '#858E98',
        },
      };
    }

    return styles;
  },
);
