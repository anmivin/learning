import Todolist from '../../components/Todolist';
import List from '../../components/TodoItemList';
import { Paper, Typography } from '@mui/material';

export default function Todo() {
  return (
    <>
      <Typography variant="h1">Todo list</Typography>
      <Paper
        sx={{
          alignItems: 'center',
          width: '60%',
          padding: '15px',
          backgroundColor: 'primary.dark',
        }}
      >
        <Todolist />
        <List />
      </Paper>
    </>
  );
}
