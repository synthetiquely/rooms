import glamorous from 'glamorous';

export const Subtitle = glamorous.h2(
  {
    margin: '0',
    fontSize: '0.9rem',
    fontWeight: '400',
    lineHeight: '17px',
    color: '#000',
    ':hover': {
      color: '#0070E0',
    },
    ':active, :focus': {
      color: '#1D54FE',
    },
  },
  ({ disabled }) => {
    let styles = {};

    if (disabled) {
      styles = {
        fontWeight: '400',
        color: '#858E98',
        ':hover, :active, :focus': {
          color: '#858E98',
        },
      };
    }

    return styles;
  },
);
