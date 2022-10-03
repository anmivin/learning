import React from 'react';
import styled from 'styled-components';
import mobchat from './ChatStore';

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
  bottom: calc(100%);
`;

const Emo = styled.div`
  padding: 1px;
  &: hover {
    cursor: pointer;
    background-color: #e0ffff;
  }
`;
const EmojiTable = () => {
  const chooseEmoji = (key: number) => {
    mobchat.input = mobchat.input + mobchat.emojis.find((it) => it.id === key).emo;
    mobchat.emojiVisibility = !mobchat.emojiVisibility;
  };
  return (
    <Container>
      {mobchat.emojis.map((emo) => (
        <Emo key={emo.id} onClick={() => chooseEmoji(emo.id)}>
          {emo.emo}
        </Emo>
      ))}
    </Container>
  );
};

export default EmojiTable;
