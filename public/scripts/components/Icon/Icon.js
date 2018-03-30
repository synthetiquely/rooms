import glamorous from 'glamorous';
import edit from './images/edit.svg';
import close from './images/close.svg';
import arrow from './images/arrow.svg';
import calendar from './images/calendar.svg';

export const Icon = glamorous.span(
  {
    display: 'block',
    width: '12px',
    height: '12px',
    color: 'rgba(0,0,0,0.43)',
    filter: 'grayscale(100%)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    ':hover, :focus, :active': {
      color: '#000',
      filter: 'grayscale(0%)',
    },
  },
  ({ type }) => {
    const styles = {};
    if (type === 'edit') {
      styles.backgroundImage = `url(${edit})`;
    } else if (type === 'close') {
      styles.backgroundImage = `url(${close})`;
    } else if (type === 'arrow') {
      styles.backgroundImage = `url(${arrow})`;
    } else if (type === 'calendar') {
      styles.backgroundImage = `url(${calendar})`;
    }
    return styles;
  },
);
