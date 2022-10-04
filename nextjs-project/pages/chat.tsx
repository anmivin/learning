import styled from 'styled-components';
import React from 'react';
import Send from '../public/Send.svg';
import { db } from '../components/ChatDb';
import '@fontsource/roboto';
import EmojiTable from '../components/Emoji';
import { observer } from 'mobx-react-lite';
import mobxchat from '../components/ChatStore';
import OpenChat from '../components/OpenChat';
import { motion } from 'framer-motion';
import Hide from '../public/Hide.svg';

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Form = styled.div`
  position: fixed;
  right: 30px;
  bottom: 100px;
  padding: 20px;
  font-family: 'Roboto';
  height: 600px;
  width: 380px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(51, 51, 51, 0.2);
  border-top: 5px solid #0848c0;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 410px) {
    position: absolute;
    margin: 10px;
    top: 0px;
    right: 0px;
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dee3e9;
  }
`;
const Button = styled.button`
  color: #0848c0;
  width: 352px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #dee3e9;
  box-shadow: 0px 2px 4px rgba(51, 51, 51, 0.2);
  border-radius: 8px;
  margin: 5px 10px;
  &:hover {
    cursor: pointer;
    background-color: #e0ffff;
  }
`;
const Section = styled.div`
  padding: 10px;
`;
const SecSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  flex-grow: 1;
  height: calc(3em + 15px);
  font-family: 'Roboto';
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dee3e9;
  }
  &::placeholder {
    position: absolute;
    top: 25%;
    left: 20%;
  }
`;

const Space = styled.div`
  height: 60px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #dee3e9;
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-top: 10px;
`;

const Message = styled.div`
  padding: 20px 5px 5px 20px;
  border-radius: 8px;
  border: 1px solid #dee3e9;
  word-wrap: break-word;
  box-shadow: 0px 2px 4px rgba(44, 48, 52, 0.15);
  margin: ${(props) => (props.title ? '10px 20px 10px 0;' : '10px 0px 10px 20px')};
  background-color: ${(props) => (props.title ? '#dee3e9' : '#deecfd')};
`;
const Toggler = styled.div`
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const Circle = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 2;
  width: 50px;
  height: 50px;
  background: #0848c0;

  border-radius: 29px;
  @media (max-width: 410px) {
    position: fixed;
    top: 20px;
    right: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Close = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 2;
  width: 50px;
  height: 50px;
  background: #0848c0;

  border-radius: 29px;
  @media (max-width: 410px) {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.3);
  }
  &:hover {
    cursor: pointer;
  }
`;

const Ref = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: #0848c0;
  }
  &:link: {
    color: #000000;
  }
`;
const Go = styled.div`
  width: 30px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const Time = styled.p`
  margin: 0px;
  text-align: right;
  font-size: 12px;
`;

const Chat: React.FC = observer(() => {
  const sendMessage = () => {
    mobxchat.setAsk();
    if (mobxchat.emojiVisibility) {
      mobxchat.changeEmojiVisibility();
    }
    mobxchat.setMessage();
  };

  if (!mobxchat.chatVisibility)
    return (
      <Circle onClick={() => mobxchat.changeVisibility()}>
        <OpenChat />
      </Circle>
    );
  return (
    <>
      {mobxchat.chatVisibility && (
        <Form>
          <Section>
            <Title>😘 Хелло</Title>
            <p>
              Сотрудники службы поддержки mos.ru ответят на вопросы о работе портала, окажут помощь в получении госуслуг
              и поиске информации
            </p>
          </Section>

          {db.map((item) => (
            <SecSection key={item.id}>
              <Button onClick={() => mobxchat.openArt(item.id)}>{item.name}</Button>
            </SecSection>
          ))}
          {mobxchat.chatHistory.map((item) => (
            <motion.div style={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Message title={item.whose} key={item.id}>
                {item.pp}
                <Ref href={item.href} target="_blank" rel="noreferrer">
                  {'  '}
                  {item.href}
                </Ref>

                <Time>{item.time}</Time>
              </Message>
            </motion.div>
          ))}

          <Space>
            {mobxchat.emojiVisibility && <EmojiTable />}
            <Toggler onClick={() => mobxchat.changeEmojiVisibility()}>👁️‍🗨️</Toggler>
            <Input
              placeholder=" Введите сообщение..."
              onChange={(e) => mobxchat.setInput(e.target.value)}
              value={mobxchat.input}
            />
            <Go onClick={sendMessage}>
              <Send />
            </Go>
          </Space>
        </Form>
      )}
      <Close onClick={() => mobxchat.changeVisibility()}>
        <motion.div style={{ position: 'relative', top: '30%', left: '30%', scale: 0.5 }} animate={{ scale: 1 }}>
          <Hide />
        </motion.div>
      </Close>
    </>
  );
});

export default Chat;
