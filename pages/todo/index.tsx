import Layout from '../../components/vaincomp/Layout';
import Todolist from '../../components/todocomp/Todolist';
import List from '../../components/todocomp/List';
import styled from 'styled-components';

/* const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: raw;
  background-color: Plum;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px Violet;
`; */
export default function Todo() {
  return (
    <Layout>
      <div>Eto todo</div>

      <Todolist />
      <List />
    </Layout>
  );
}
