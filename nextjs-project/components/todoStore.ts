import { makeAutoObservable, configure, reaction } from 'mobx';

import { TodoList } from '../types/types';
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
  }

  deleteItem = (key: number) => {
    this.todoList = this.todoList.filter((todoItem) => todoItem.key !== key);
  };

  completeItem(key: number) {
    this.todoList = this.todoList.map((todoItem) =>
      todoItem.key === key ? { ...todoItem, isChecked: !todoItem.isChecked } : { ...todoItem },
    );
  }
}
const store = new Store();
reaction(
  () => JSON.stringify(store),
  (json) => {
    localStorage.setItem('store', json);
  },
);

export default store;
