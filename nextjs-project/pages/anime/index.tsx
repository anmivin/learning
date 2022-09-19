import React, { useState, useRef } from 'react';
import { Button, Typography, Input, Container, Drawer, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import titlesStore from '../../components/titlesStore';
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

      <Container sx={{ flexDirection: 'column', backgroundColor: 'primary.main' }}>
        <Container sx={{ margin: '0px', padding: '0px', boxShadow: 'none' }}>
          <Container sx={{ marginBottom: '20px', justifyContent: 'start', boxShadow: 'none' }}>
            <Input color="secondary" inputRef={inputRef} placeholder="Find" />
            <Button onClick={() => (titlesStore.search = inputRef.current.value)}>Search</Button>
          </Container>
          <Container sx={{ marginBottom: '20px', justifyContent: 'end', boxShadow: 'none' }}>
            <Button onClick={openDrawer}>Add title</Button>
          </Container>
        </Container>

        <Grid container spacing={6}>
          {titlesStore.filtered.map((title) => (
            <Grid item xs={12} md={4} xl={3} key={title.id}>
              <motion.div
                style={{
                  backgroundColor: `${theme.palette.background.default}`,
                  padding: '10px',
                  boxShadow: `1px 1px 2px ${theme.palette.primary.light}, -1px -1px 2px ${theme.palette.primary.light}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  borderRadius: 10,
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
                <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '0.9em' }}>
                  {title.orName}
                </Typography>
                <motion.div
                  whileHover={{
                    skewX: 2,
                    background: `url(/stars.gif), url(/${title.picture}) `,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    boxShadow: `4px 4px 5px ${theme.palette.primary.light},  -4px -4px 5px ${theme.palette.primary.light}`,
                  }}
                  style={{
                    width: '90%',
                    height: '300px',
                    background: `url(/${title.picture})`,
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
