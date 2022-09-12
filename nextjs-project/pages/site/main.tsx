import React from 'react';
import styled from 'styled-components';
import { Button, Paper, Typography, Checkbox, Input } from '@mui/material';
import Image from 'next/image';
import pic from '../../components/img/pic.jpg';
import profpic from '../../components/img/profpic.jpg';
import SiteLayout from '../../components/SiteLayout';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import word from '../../components/poleChudes';
import { observer } from 'mobx-react-lite';
import kov from '../../components/img/kov.jpg';

const Inputs = styled.div`
  display: flex;
  flex-direction: raw;
`;

const Main: React.FC = observer(() => {
  return (
    <SiteLayout>
      {word.visibility && (
        <Paper
          sx={{
            position: 'absolute',
            left: '20%',
            top: '20%',
            zIndex: 9,
            width: '70%',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '50px',
          }}
        >
          <Image alt="КОВРИЖКА" src={kov} onClick={() => word.hidePicture()} />
        </Paper>
      )}

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
          <Typography variant="h2">Ваше слово</Typography>
          <Typography variant="h5" onChange={(e) => e.target}>
            {word.yourword}
          </Typography>
        </Paper>
        <Paper>
          <Typography variant="h2">Назовите букву</Typography>
          <Inputs>
            <Input placeholder="Ваша буква" value={word.letter} onChange={(e) => (word.letter = e.target.value)} />
            <Button size="small" onClick={() => word.addLetter()}>
              <Typography variant="button">Угадать</Typography>
            </Button>
          </Inputs>
        </Paper>

        <Paper>
          <Inputs>
            <Checkbox icon={<StarBorderIcon />} checkedIcon={<StarRateIcon />} />
            <Typography variant="h5">Передать подарки</Typography>
          </Inputs>
        </Paper>
      </Paper>
    </SiteLayout>
  );
});

export default Main;
