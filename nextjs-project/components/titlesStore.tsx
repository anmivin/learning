import { makeAutoObservable, configure } from 'mobx';
import { Titles } from '../types/types';

configure({
  enforceActions: 'never',
});

class TitlesStore {
  constructor() {
    makeAutoObservable(this);
  }
  titles: Titles[] = [];
  search: string = '';
  isAdd = false;
  isFailire = false;

  get filtered() {
    let searchList: Titles[] = [];
    searchList = this.titles.filter(
      (item) =>
        item.item.toLowerCase().includes(this.search.toLowerCase()) ||
        item.discription.toLowerCase().includes(this.search.toLowerCase()),
    );
    if (searchList.length) {
      this.isFailire = false;
      return searchList;
    } else {
      this.isFailire = true;
      return this.titles;
    }
  }
}
const titlesStore = new TitlesStore();

export default titlesStore;
