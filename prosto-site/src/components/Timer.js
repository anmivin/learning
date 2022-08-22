import React, { useContext } from 'react';
import UserContext from './TimerContext';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Timer = () => {
  const { secs, mins, hours } = useContext(UserContext);

  return (
    <div className="app">
      <div className="time">
        <Div>
          Текущая сессия: {hours < 10 ? '0' + hours : hours}:{mins < 10 ? '0' + mins : mins}:
          {secs < 10 ? '0' + secs : secs}
        </Div>
      </div>
    </div>
  );
};

export default Timer;
