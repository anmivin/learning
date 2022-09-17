import React from 'react';

import { TodoList } from '../types/types';
import { observer } from 'mobx-react-lite';
import { Checkbox, Paper, Container, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import store from './todoStore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const List: React.FC = observer(() => {
  return (
    <Paper sx={{ boxShadow: 'none', backgroundColor: 'inherit' }}>
      {store.todoList.map((itemList: TodoList) => (
        <Container sx={{ backgroundColor: 'inherit', boxShadow: 'none' }} key={itemList.key}>
          <Checkbox
            icon={<StarBorderIcon />}
            checkedIcon={<StarRateIcon />}
            checked={itemList.isChecked}
            onChange={() => store.completeItem(itemList.key)}
          />
          <Typography variant="h5" onChange={(e) => e.target}>
            {itemList.item}
          </Typography>
          <Checkbox icon={<DeleteOutlineIcon />} onClick={() => store.deleteItem(itemList.key)} />
        </Container>
      ))}
    </Paper>
  );
});

export default List;
