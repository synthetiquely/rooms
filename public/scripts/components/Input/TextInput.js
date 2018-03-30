import glamorous from 'glamorous';

export const TextInput = glamorous.input({
  padding: '10px',
  border: '2px solid #E9ECEF',
  borderRadius: '4px',
  fontFamily: 'inherit',
  outline: 'none',
  ':focus, :active': {
    borderColor: '#007DFF',
  },
});
