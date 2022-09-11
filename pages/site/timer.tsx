import { observer } from 'mobx-react-lite';
import moment from 'moment';
import SiteLayout from './SiteLayout';
import Layout from '../../components/Layout';
import { Typography } from '@mui/material';
import TimerCount from '../../components/timerStore';
const Timer: React.FC = observer(() => {
  setInterval(() => {
    TimerCount.counting();
  }, 1000);

  const time = moment.utc(TimerCount.secs * 1000).format('HH:mm:ss');
  return (
    <Layout>
      <SiteLayout>
        <div className="time">
          <Typography variant="h5">Текущая сессия: {time}</Typography>
        </div>
      </SiteLayout>
    </Layout>
  );
});

export default Timer;
