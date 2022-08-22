import List from './List';
import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const HeaderStyle = styled.div`
  padding: 20px;
  font: bold 30px cursive;
  color: white;
  text-shadow: 2px 2px 1px black;
`;

const WrapperList = styled.div`
  background-color: MediumPurple;
  width: 70vw;
  margin: auto;
  border-radius: 10px;
  padding: 20px 10px 20px;
  box-shadow: 2px 2px 1px black;
`;
const WrapperListItem = styled.div`
  padding: 0;
  margin: 0;
  background-color: MediumPurple;
  width: 100%;
`;

const InputField = styled.input`
  border-radius: 4px;
  border: 1;
  background-color: whitesmoke;
  margin: 0px 10px;
  height: 25px;
  width: 50%;
`;

const ButtonAdd = styled.button`
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
`;

function App() {
  const [currentItem, setCurrentItem] = useState('');
  const [itemList, updateItemList] = useState([]);
  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now(), isChecked: false }]);
    setCurrentItem('');
  };
  return (
    <Header>
      <HeaderStyle>Todo List. The design is very human</HeaderStyle>
      <WrapperList>
        <WrapperListItem>
          <InputField placeholder="Add task" value={currentItem} onChange={onChangeHandler} />
          <ButtonAdd onClick={addItemToList}>Add</ButtonAdd>
        </WrapperListItem>
        <List itemList={itemList} updateItemList={updateItemList} />
      </WrapperList>
    </Header>
  );
}

export default App;
