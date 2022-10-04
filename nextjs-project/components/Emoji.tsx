import React from 'react';
import styled from 'styled-components';
import mobxchat from './ChatStore';
import { emojis } from './ChatDb';

const Container = styled.div`
  width: 100px;
  height: 110px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: 0px 0px 1px 1px #d6dade;
  border-radius: 2px;
  padding: 5px;
  background-color: white;
  position: absolute;
  bottom: 100%;
`;

const Emo = styled.div`
  padding: 1px;
  &: hover {
    cursor: pointer;
    background-color: #e0ffff;
  }
`;
const EmojiTable = () => {
  return (
    <Container>
      {emojis.map((emo) => (
        <Emo key={emo.id} onClick={() => mobxchat.chooseEmoji(emo.id)}>
          {emo.emo}
        </Emo>
      ))}
    </Container>
  );
};

export default EmojiTable;
