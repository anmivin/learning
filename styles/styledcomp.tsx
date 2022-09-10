import { Button } from '@mui/material';

const buttonStyles = {
  backgroundColor: '#d9ffd5',

  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
  },
  '&:active': {
    color: 'green',
  },
};

const TheButton = ({ children, onClick }) => {
  return (
    <Button sx={buttonStyles} onClick={onClick}>
      {children}
    </Button>
  );
};

export default TheButton;
