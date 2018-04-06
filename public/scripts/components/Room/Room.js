import glamorous from 'glamorous';

export const Room = glamorous.div({ width: '120px' }, ({ floated }) => {
  const styles = {};
  if (floated) {
    styles.display = 'inline-block';
    styles.visibility = 'visible';
  }
  return styles;
});
