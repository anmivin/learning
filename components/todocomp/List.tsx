import React from 'react';
import styled from 'styled-components';
import { TodoList } from '../hackcomp/types';
import { observer } from 'mobx-react-lite';
import { Checkbox, Paper } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import Store from '../store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ListItem = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  height: 30px;
  border-radius: 2px;
  padding: 10px;

  font-size: 20px;
  text-shadow: 1px 1px 1px white;

  &:active {
    color: MidnightBlue;
  }
`;

const List: React.FC = observer(() => {
  return (
    <Paper>
      {Store.todoList.map((itemList: TodoList) => (
        <ListItem key={itemList.key}>
          <Checkbox
            icon={<StarBorderIcon />}
            checkedIcon={<StarRateIcon />}
            color="primary"
            checked={itemList.isChecked}
            onChange={() => Store.completeItem(itemList.key)}
          />
          <div onChange={(e) => DOMRectReadOnly}>{`${itemList.item}`}</div>

          <Checkbox icon={<DeleteOutlineIcon />} onClick={() => Store.deleteItem(itemList.key)} />
        </ListItem>
      ))}
    </Paper>
  );
});

export default List;
