import React, { useContext } from 'react';
import UserContext from '../../components/sitecomp/TimerContext';
import styled from 'styled-components';
import moment from 'moment';
import SiteLayout from './SiteLayout';
import Layout from '../../components/vaincomp/Layout';

const Div = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Timer: React.FC = () => {
  const { secs } = useContext(UserContext);
  const time = moment.utc(secs * 1000).format('HH:mm:ss');

  return (
    <Layout>
      <SiteLayout>
        <div className="time">
          <Div>Текущая сессия: {time}</Div>
        </div>
      </SiteLayout>
    </Layout>
  );
};

export default Timer;
