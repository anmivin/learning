import React from 'react';
import styled from 'styled-components';

import Store from '../store';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const WrapperList = styled.div`
  width: 70vw;
  margin: auto;
  border-radius: 10px;
  padding: 20px 10px 20px;
  box-shadow: 2px 2px 1px black;
`;
const WrapperListItem = styled.div`
  padding: 0;
  margin: 0;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InputField = styled.input`
  border-radius: 4px;
  border: 1;
  background-color: whitesmoke;
  margin: 0px 10px;
  height: 25px;
  width: 50%;
`;

/* const ButtonAdd = styled.button`
  padding: 0px 5px;
  margin: 0px;
  background-color: DarkSlateBlue;
  border-radius: 3px;
  box-shadow: 1px 1px 1px black;
  color: white;
  text-shadow: 1px 1px 1px black;
  &:hover {
    background-color: RoyalBlue;
    color: white;
  }
  &:active {
    color: MidnightBlue;
  }
`; */

const App: React.FC = observer(() => {
  return (
    <>
      <Header>
        <WrapperList>
          <WrapperListItem>
            <InputField
              placeholder="Add task"
              value={Store.todoItem.item}
              onChange={(e) => (Store.todoItem.item = e.target.value)}
            />
            <Button onClick={() => Store.addItem()}>Add</Button>
          </WrapperListItem>
        </WrapperList>
      </Header>
    </>
  );
});

export default App;
