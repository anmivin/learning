import { makeAutoObservable, configure } from 'mobx';

import { TodoList } from './hackcomp/types';
configure({
  enforceActions: 'never',
});
class Store {
  todoList: TodoList[] = [];
  todoItem: TodoList = this.resetItem();

  resetItem() {
    return {
      item: '',
      key: Date.now(),
      isChecked: false,
    };
  }

  constructor() {
    makeAutoObservable(this);
  }

  addItem() {
    this.todoList.push(this.todoItem);
    this.todoItem = this.resetItem();
    console.log(this.todoItem);
  }

  deleteItem = (key: number) => {
    this.todoList = this.todoList.filter((todoItem) => todoItem.key !== key);
    console.log('del');
  };

  completeItem(key: number) {
    this.todoList = this.todoList.map((todoItem) =>
      todoItem.key === key ? { ...todoItem, isChecked: !todoItem.isChecked } : { ...todoItem },
    );
    console.log('chek');
  }
}
export default new Store();
