import React from 'react';
import styled from 'styled-components';

const WrapperList = styled.div`
  background-color: MediumPurple;
`;
const Button = styled.button`
  background-color: DarkSlateBlue;
  color: Lavender;
  border-radius: 3px;
  width: 17px;
  height: 17px;
  font-size: 10px;
  padding: 0;

  &:hover {
    background-color: RoyalBlue;
    color: white;
  }
  &:active {
    color: MidnightBlue;
  }
`;
const ListItem = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  height: 30px;
  border-radius: 2px;
  padding: 10px;
  background-color: MediumPurple;
  font-size: 20px;
  text-shadow: 1px 1px 1px white;

  &:active {
    color: MidnightBlue;
  }
`;
const Check = styled.input`
  box-shadow: 1px 1px 1px black;
`;

const Inputus = styled.div`
  background-color: MediumPurple;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : '')};
`;

function List({ itemList, updateItemList }) {
  const deleteItem = (key) => {
    const newList = itemList.filter((itemList) => {
      return itemList.key !== key;
    });
    updateItemList(newList);
  };

  const completeItem = (key) => {
    const newTodoList = itemList.map((itemList) => {
      return itemList.key === key ? { ...itemList, isChecked: !itemList.isChecked } : { ...itemList };
    });
    updateItemList(newTodoList);
  };

  return (
    <WrapperList>
      {itemList.map((itemList) => {
        return (
          <ListItem key={itemList.key}>
            <Check type="checkbox" onChange={() => completeItem(itemList.key)} />
            <Inputus isChecked={itemList.isChecked}>{itemList.item}</Inputus>
            <Button onClick={() => deleteItem(itemList.key)}>&#215;</Button>
          </ListItem>
        );
      })}
    </WrapperList>
  );
}

export default List;
