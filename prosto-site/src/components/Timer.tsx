import React, { useContext } from 'react';
import UserContext from './TimerContext';
import styled from 'styled-components';
import moment from 'moment';

const Div = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Timer: React.FC = () => {
  const { secs } = useContext(UserContext);
  const time = moment.utc(secs * 1000).format('HH:mm:ss');

  return (
    <div className="app">
      <div className="time">
        <Div>Текущая сессия: {time}</Div>
      </div>
    </div>
  );
};

export default Timer;
