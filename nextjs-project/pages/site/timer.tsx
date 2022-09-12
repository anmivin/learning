import React, { useContext } from 'react';
import moment from 'moment';
import SiteLayout from '../../components/SiteLayout';

import { Typography } from '@mui/material';
import TimerContext from '../../components/TimerContext';
const Timer: React.FC = () => {
  const { secs } = useContext(TimerContext);
  const time = moment.utc(secs * 1000).format('HH:mm:ss');

  return (
    <SiteLayout>
      <div className="time">
        <Typography variant="h5">Текущая сессия: {time}</Typography>
      </div>
    </SiteLayout>
  );
};

export default Timer;
