import React from 'react';

import store from './todoStore';
import { observer } from 'mobx-react-lite';
import { Button, Container, Input, Typography } from '@mui/material';

const App: React.FC = observer(() => {
  return (
    <>
      <Container sx={{ margin: '10px' }}>
        <Input
          placeholder="Add task"
          value={store.todoItem.item}
          onChange={(e) => (store.todoItem.item = e.target.value)}
        />
        <Button onClick={() => store.addItem()}>
          <Typography variant="button">Add</Typography>
        </Button>
      </Container>
    </>
  );
});

export default App;
