import glamorous from 'glamorous';

export const Avatar = glamorous.div(
  {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '50%',
  },
  ({ size, src }) => {
    const styles = {
      backgroundImage: `url(${src})`,
    };

    if (!size || size === 'medium') {
      styles.width = '24px';
      styles.height = '24px';
    } else if (size === 'large') {
      styles.width = '36px';
      styles.height = '36px';
    }

    return styles;
  },
);
