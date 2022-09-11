import React from 'react';
import styled from 'styled-components';
import { Button, Paper, Typography, Checkbox, Input } from '@mui/material';
import Image from 'next/image';
import pic from '../../components/img/pic.jpg';
import profpic from '../../components/img/profpic.jpg';
import SiteLayout from '../../components/SiteLayout';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Inputs = styled.div`
  display: flex;
  flex-direction: raw;
`;

const Main: React.FC = () => {
  return (
    <SiteLayout>
      <Paper sx={{ flexGrow: 1, backgroundColor: '#d8bfd8', boxShadow: 'none' }}>
        <Paper>
          <Image alt="pic" src={pic} />
          <div>
            <Typography variant="h2">Цитата дня</Typography>
            <Typography variant="h3">Настоящий волк идёт по жизни или за майонезом, или за пивом</Typography>
            <Typography variant="h4">Perfect</Typography>
          </div>
        </Paper>
        <Paper>
          <div>
            <Typography variant="h3">Деньги не делают тебя беднее, они лишь делают тебя богаче.</Typography>
            <Typography variant="h4">Nice</Typography>
          </div>
        </Paper>
        <Paper>
          <div>
            <Typography variant="h3">Если тебе тяжело идти, значит ты жирный</Typography>
            <Typography variant="h4">Good</Typography>
          </div>
        </Paper>
      </Paper>
      <Paper sx={{ width: '25%', flexShrink: 0, backgroundColor: '#d8bfd8', boxShadow: 'none' }}>
        <Paper>
          <Image alt="profpic" src={profpic} />
          <Typography variant="h2">Вращайте барбан</Typography>
          <Typography variant="h5">Сектор приз</Typography>
          <Typography variant="h5">Сектор плюс</Typography>
          <Typography variant="h5">Сектор без баб</Typography>
        </Paper>
        <Paper>
          <Typography variant="h2">Назовите букву</Typography>
          <Inputs>
            <Input placeholder="Ваша буква" />
            <Button size="small" onClick={() => alert('Да что вы!')}>
              <Typography variant="button">Угадать</Typography>
            </Button>
          </Inputs>
        </Paper>

        <Paper sx={{ flexDirection: 'raw' }}>
          <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarRateIcon />} />
          <Typography variant="h5">Передать подарки</Typography>
        </Paper>
      </Paper>
    </SiteLayout>
  );
};

export default Main;
