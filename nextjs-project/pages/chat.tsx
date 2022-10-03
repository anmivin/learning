import styled from 'styled-components';
import React from 'react';
import Send from '../public/send.svg';
import '@fontsource/roboto';
import EmojiTable from '../components/Emoji';
import { observer } from 'mobx-react-lite';
import mobchat from '../components/ChatStore';
import OpenChat from '../components/OpenChat';
import { motion } from 'framer-motion';

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Form = styled.div`
  position: fixed;
  right: 30px;
  bottom: 150px;
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
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
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
  rows: 3;
  font-family: 'Roboto';
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dee3e9;
  }
`;

const Space = styled.div`
  height: 48px;
  position: relative;
  box-sizing: border-box;
  width: 352px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #dee3e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
  &:hover {
    cursor: pointer;
  }
`;
const Circle = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 2;
  @media (max-width: 410px) {
    position: fixed;
    top: 15px;
    right: 5px;
    opacity: 0.5;
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
`;
const Time = styled.p`
  margin: 0px;
  text-align: right;
  font-size: 12px;
`;

const Chat: React.FC = observer(() => {
  const sendMessage = () => {
    mobchat.setAsk();
    mobchat.emojiVisibility = false;
    mobchat.input = '';
    mobchat.theMess();
  };

  return (
    <>
      {mobchat.chatVisibility && (
        <Form>
          <Section>
            <Title>😘 Хелло</Title>
            <p>
              Сотрудники службы поддержки mos.ru ответят на вопросы о работе портала, окажут помощь в получении госуслуг
              и поиске информации
            </p>
          </Section>

          {mobchat.db.map((item) => (
            <SecSection key={item.id}>
              <Button onClick={() => mobchat.openArt(item.id)}>{item.name}</Button>
            </SecSection>
          ))}
          {mobchat.chatHistory.map((item) => (
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
            {mobchat.emojiVisibility && <EmojiTable />}
            <Toggler onClick={() => (mobchat.emojiVisibility = !mobchat.emojiVisibility)}>👁️‍🗨️</Toggler>
            <Input
              placeholder=" Введите сообщение..."
              onChange={(e) => (mobchat.input = e.target.value)}
              value={mobchat.input}
            ></Input>
            <Go onClick={sendMessage}>
              <Send />
            </Go>
          </Space>
        </Form>
      )}
      <Circle>
        <OpenChat />
      </Circle>
    </>
  );
});

export default Chat;
