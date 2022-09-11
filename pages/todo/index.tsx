import Layout from '../../components/Layout';
import Todolist from '../../components/Todolist';
import List from '../../components/TodoItemList';

import { Paper, Typography } from '@mui/material';

export default function Todo() {
  return (
    <Layout>
      <Typography variant="h1">Todo list</Typography>
      <Paper sx={{ alignItems: 'center', width: '60%', padding: '15px' }}>
        <Todolist />
        <List />
      </Paper>
    </Layout>
  );
}
