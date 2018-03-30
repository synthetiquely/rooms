import glamorous from 'glamorous';
import edit from './images/edit.svg';
import close from './images/close.svg';
import arrow from './images/arrow.svg';
import calendar from './images/calendar.svg';
import emoji1 from './images/emoji1.svg';
import emoji2 from './images/emoji2.svg';

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
    } else if (type === 'emoji1') {
      styles.width = '41px';
      styles.height = '60px';
      styles.backgroundImage = `url(${emoji1})`;
      styles.filter = 'grayscale(0%)';
    } else if (type === 'emoji2') {
      styles.width = '41px';
      styles.height = '60px';
      styles.backgroundImage = `url(${emoji2})`;
      styles.filter = 'grayscale(0%)';
    }
    return styles;
  },
);
