import React, { useState, useEffect } from 'react';
import { Button, Typography, Input, Container, Drawer, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import titlesStore from '../../components/TitlesStore';
import { observer } from 'mobx-react-lite';
import Form from '../../components/Form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Titles } from '../../types/types';

const Main: React.FC = observer(() => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currenValue, setCurrentValue] = useState('');

  useEffect(() => {
    axios.get<Titles[]>('http://localhost:3000/api/').then((response) => {
      let existing = localStorage.getItem('titles');
      if (!existing) {
        localStorage.setItem('titles', JSON.stringify(response.data));
        titlesStore.titles = JSON.parse(localStorage.getItem('titles'));
      } else {
        titlesStore.titles = JSON.parse(localStorage.getItem('titles'));
      }
    });
  }, [titlesStore.isAdd]);

  const openDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Typography variant="h1" sx={{ margin: '15px' }}>
        Моё любимое анимцо
      </Typography>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        sx={{
          width: '300px',
          '& .MuiDrawer-paper': {
            width: '300px',
          },
        }}
      >
        <Form />
        <div>
          <Button onClick={openDrawer}>Close</Button>
        </div>
      </Drawer>

      <Container sx={{ flexDirection: 'column', backgroundColor: 'primary.main', boxSizing: 'content-box' }}>
        <Container sx={{ margin: '0px', padding: '0px', boxShadow: 'none' }}>
          <Container sx={{ marginBottom: '20px', justifyContent: 'start', boxShadow: 'none' }}>
            <Input color="secondary" onChange={(e) => setCurrentValue(e.target.value)} placeholder="Find" />
            <Button onClick={() => (titlesStore.search = currenValue)}>Search</Button>
          </Container>
          <Container sx={{ marginBottom: '20px', justifyContent: 'end', boxShadow: 'none' }}>
            <Button onClick={openDrawer}>Add title</Button>
          </Container>
        </Container>
        {titlesStore.isFailire ? <Typography variant="h2">Ничего не нашлось</Typography> : ''}
        <Grid container spacing={4}>
          {titlesStore.filtered.map((title) => (
            <Grid item xs={12} sm={6} md={3} xl={2} key={title.id}>
              <motion.div
                style={{
                  backgroundColor: `${theme.palette.background.default}`,
                  padding: '10px',
                  boxShadow: `1px 1px 2px ${theme.palette.primary.light}, -1px -1px 2px ${theme.palette.primary.light}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  borderRadius: 10,
                  height: '600px',
                }}
                whileHover={{
                  backgroundImage: 'url(/stars1.gif)',
                  backgroundBlendMode: 'multiply',
                  scale: 1.1,
                }}
              >
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  {title.item}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', fontSize: 12 }}>
                  {title.orName}
                </Typography>

                <motion.div
                  whileHover={{
                    skewX: 2,
                    background: `url(/stars.gif), url(/${title.path}${title.picture}) `,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 30%',
                    boxShadow: `4px 4px 5px ${theme.palette.primary.light},  -4px -4px 5px ${theme.palette.primary.light}`,
                  }}
                  style={{
                    width: '95%',
                    height: '250px',
                    background: `url(/${title.path}${title.picture}) `,
                    backgroundSize: 'cover',
                    margin: 'auto',
                    backgroundPosition: '50% 30%',
                  }}
                />
                <Container sx={{ height: '20vh', justifyContent: 'center', alignItems: 'center', boxShadow: 'none' }}>
                  <Typography sx={{ padding: '0px' }} variant="h5">
                    {title.discription}
                  </Typography>
                </Container>
                <Typography variant="h4">{title.rating}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
});

export default Main;
