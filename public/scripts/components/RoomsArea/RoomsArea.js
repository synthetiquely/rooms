import glamorous from 'glamorous';

export const RoomsArea = glamorous.aside(
  {
    left: '0',
    width: '120px',
  },
  ({ floated }) => {
    const styles = {};
    if (floated) {
      styles.position = 'sticky';
      styles.visibility = 'hidden';
    }
    return styles;
  },
);
