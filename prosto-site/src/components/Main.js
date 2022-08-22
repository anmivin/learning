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
const Title = styled.p`
  font-size: 1.1em;
  border-bottom: solid 1px indigo;
`;
const MainSection = styled.div`
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
const CiteText = styled.div`
  padding: 15px;
  border-left: double 3px Indigo;
`;
const Cite = styled.div`
  padding: 10px;
`;
const Rating = styled.div`
  text-align: end;
  padding: 0 5px 5px 0;
`;
const OtherPost = styled.div`
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px 5px Indigo;
`;
const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  width: 20%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const SideSectionTop = styled.div`
  box-shadow: 0px 0px 10px 5px Indigo;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 90%;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
`;
const ProfileImg = styled.img`
  border-radius: 50px;
  margin: auto;
  width: 100%;
  height: auto;
`;
const SideSectionMid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px Indigo;
  border-radius: 10px;
  margin-bottom: 30px;
  width: 90%;
`;
const SideSectionBot = styled.div`
  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0px 0px 10px 5px Indigo;
  border-radius: 10px;
  width: 90%;
`;
const Input = styled.div`
  display: flex;
  flex-direction: raw;
`;
const InputField = styled.input`
  width: 65%;
`;

function Main() {
  return (
    <>
      <Wrapper>
        <MainSection>
          <FirstPost>
            <Img src={pic} alt="pic" />
            <Cite>
              <Title>Цитата дня</Title>
              <CiteText>Настоящий волк идёт по жизни или за майонезом, или за пивом</CiteText>
              <Rating>Perfect</Rating>
            </Cite>
          </FirstPost>
          <OtherPost>
            <Cite>
              <CiteText>Деньги не делают тебя беднее, они лишь делают тебя богаче.</CiteText>
              <Rating>Nice</Rating>
            </Cite>
          </OtherPost>
          <OtherPost>
            <Cite>
              <CiteText>Если тебе тяжело идти, значит ты жирный</CiteText>
              <Rating>Good</Rating>
            </Cite>
          </OtherPost>
        </MainSection>
        <SideSection>
          <SideSectionTop>
            <ProfileImg src={profpic} width="200px" height="200px" alt="profpic" />
            <Title>Вращайте барбан</Title>
            <Text>Сектор приз</Text>
            <Text>Сектор плюс</Text>
            <Text>Сектор без баб</Text>
          </SideSectionTop>
          <SideSectionMid>
            <Title>Назовите букву</Title>
            <Input>
              <InputField placeholder="Ваша буква" />
              <button onClick={() => alert('Да что вы!')}>Угадать</button>
            </Input>
          </SideSectionMid>
          <SideSectionBot>
            <Input>
              <input type="checkbox" />
              <Text>Передать подарки</Text>
            </Input>
          </SideSectionBot>
        </SideSection>
      </Wrapper>
    </>
  );
}

export default Main;
