import glamorous from 'glamorous';

export const SelectionItem = glamorous.button(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    color: '#000',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#E9ECEF',
    ':hover, :active, :focus': {
      backgroundColor: '#DDE0E3',
    },
  },
  ({ selected }) => {
    let styles = {};
    if (selected) {
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
    return styles;
  },
);
