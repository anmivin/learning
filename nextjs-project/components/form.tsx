import { useForm, SubmitHandler } from 'react-hook-form';
import { Titles } from '../types/types';
import { MenuItem, Button, Input, Typography, TextField } from '@mui/material';
import React from 'react';
import titlesStore from './TitlesStore';

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Titles>();

  const onSubmit: SubmitHandler<Titles> = (data) => {
    let toAdd = {
      id: Date.now(),
      item: data.item,
      orName: data.orName,
      discription: data.discription,
      picture: data.picture[0].name,
      rating: data.rating,
    };
    let existing = JSON.parse(localStorage.getItem('titles'));
    existing.push(toAdd);
    localStorage.setItem('titles', JSON.stringify(existing));
    titlesStore.isAdd = !titlesStore.isAdd;
    reset();
  };

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="body1">Name:</Typography>
        <Input color="secondary" {...register('item', { required: 'Обязательно заполните' })} />
        <Typography variant="body2" color="secondary">
          {errors?.item && errors?.item?.message}
        </Typography>
        <Typography variant="body1">Original name:</Typography>
        <Input color="secondary" {...register('orName')} />
        <Typography variant="body1">Description:</Typography>
        <Input color="secondary" {...register('discription')} />
        <Typography variant="body1">Picture:</Typography>
        <Input type="file" {...register('picture', { required: 'Добавьте картиночку' })} />
        <Typography variant="body2" color="secondary">
          {errors?.picture && errors?.picture?.message}
        </Typography>
        <Typography variant="body1">Rating:</Typography>
        <TextField
          label="How do you like it"
          select
          sx={{
            marginTop: '10px',
            '& .MuiInputBase-root': {
              color: 'primary.light',
            },
          }}
          color="secondary"
          {...register('rating')}
        >
          <MenuItem value="0/10">Словил кринж</MenuItem>
          <MenuItem value="1/10">Кринжанул</MenuItem>
          <MenuItem value="2/10">Норм</MenuItem>
          <MenuItem value="3/10">Неплох</MenuItem>
          <MenuItem value="4/10">Хорош</MenuItem>
          <MenuItem value="5/10">Чел хорош</MenuItem>
          <MenuItem value="6/10">Супер хорош</MenuItem>
          <MenuItem value="7/10">Мега хорош</MenuItem>
          <MenuItem value="8/10">Ультра хорош</MenuItem>
          <MenuItem value="9/10">Супер дупер мега хорош</MenuItem>
          <MenuItem value="10/10">Восхитителен</MenuItem>
        </TextField>

        <Button type="submit">Add</Button>
      </form>
    </>
  );
};

export default Form;
