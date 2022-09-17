import { useForm, SubmitHandler } from 'react-hook-form';
import titlesStore from './baza';
import { Titles } from '../types/types';
import { MenuItem, Button, Select, Input } from '@mui/material';

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<Titles>();
  const onSubmit: SubmitHandler<Titles> = (data) => {
    console.log(data);
    titlesStore.addTitle();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name', { required: true })} placeholder="name" />
      <Input {...register('orName')} placeholder="orname" />
      <Input {...register('discription')} placeholder="disc" />
      <Input {...register('picture')} placeholder="picture" />
      <Select {...register('rating')}>
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
      </Select>

      <Button type="submit"> Добавить</Button>
    </form>
  );
};

export default Form;
