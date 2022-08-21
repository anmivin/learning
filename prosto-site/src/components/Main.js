import React from 'react';
import styled from 'styled-components';
import pic from './img/pic.jpg';
import profpic from './img/profpic.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
`;
const Title = styled.div`
  border: solid white 3px;
`;
const MainSec = styled.div`
  width: 70%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 10px;
`;

const FirstPost = styled.div`
  box-shadow: 0px 0px 10px 5px Indigo;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
`;
const Text = styled.div`
  padding: 15px;
`;
const SecPost = styled.div`
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px 5px Indigo;
`;
const SideSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  width: 20%;
`;
const SideSectionTop = styled.div`
  box-shadow: 0px 0px 10px 5px Indigo;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;

  border-radius: 10px;
  padding: 10px;
`;
const ProfileImg = styled.img`
  border-radius: 50px;
  margin: 15px 5px;
  width: 80%;
`;

const SideSectionMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px Indigo;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const SideSectionBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px Indigo;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 80%;
`;

function Main() {
  return (
    <>
      <Wrapper>
        <MainSec>
          <FirstPost>
            <Img src={pic} alt="pic" />

            <Text>Настоящий волк идёт по жизни или за майонезом, или за пивом</Text>
          </FirstPost>
          <SecPost>
            <Text>Деньги не делают тебя беднее, они лишь делают тебя богаче.</Text>
          </SecPost>
          <SecPost>
            <Text>Если тебе тяжело идти, значит ты жирный</Text>
          </SecPost>
        </MainSec>
        <SideSec>
          <SideSectionTop>
            <ProfileImg src={profpic} width="200px" height="200px" alt="profpic" />

            <Title>На барабане:</Title>

            <Text>Сектор приз</Text>
            <Text>Сектор плюс</Text>
            <Text>Сектор без баб</Text>
          </SideSectionTop>
          <SideSectionMid>
            <Title>Назовите букву</Title>
            <Input placeholder="Ваша буква" />
            <button onClick={() => alert('Да что вы!')}>Угадать</button>
          </SideSectionMid>
          <SideSectionBot>
            <input type="checkbox" />
            <Text>Передать подарки в музей капитал-шоу</Text>
          </SideSectionBot>
        </SideSec>
      </Wrapper>
    </>
  );
}

export default Main;
