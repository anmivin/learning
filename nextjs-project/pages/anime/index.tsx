import React, { useState, useRef } from 'react';
import { Button, Typography, Input, Container, Drawer, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import titlesStore from '../../components/baza';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { observer } from 'mobx-react-lite';
import Form from '../../components/form';
import { motion } from 'framer-motion';

const Main: React.FC = observer(() => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const openDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Typography variant="h1">Ваше любимое анимцо</Typography>
      <FavoriteIcon onClick={openDrawer} />
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
      </Drawer>

      <Container sx={{ backgroundColor: 'primary.main', marginBottom: '20px' }}>
        <Input inputRef={inputRef} placeholder="Find" />
        <Button onClick={() => (titlesStore.search = inputRef.current.value)}>Search</Button>
      </Container>
      <Container sx={{ backgroundColor: 'primary.main' }}>
        <Grid container spacing={6}>
          {titlesStore.filtered.map((title) => (
            <Grid item xs={12} md={4} xl={3} key={title.id}>
              <motion.div
                style={{
                  backgroundColor: `${theme.palette.primary.dark}`,
                  padding: '10px',
                  boxShadow: '1px 1px 2px black, -1px -1px 2px black',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  borderRadius: 10,
                }}
                whileHover={{
                  backgroundImage: 'url(/stars1.gif)',
                  backgroundColor: `${theme.palette.background.default}`,
                  backgroundBlendMode: 'multiply',
                  scale: 1.1,
                }}
              >
                <Typography variant="h6">{title.name}</Typography>
                <Typography variant="body2">{title.orName}</Typography>
                <motion.div
                  whileHover={{
                    background: `url(/stars.gif), url(/${title.picture}.jpg) `,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    boxShadow: '4px 4px 5px black,  -4px -4px 5px black',
                  }}
                  style={{
                    width: '90%',
                    height: '300px',
                    background: `url(/${title.picture}.jpg)`,
                    backgroundSize: 'cover',
                    margin: 'auto',
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
