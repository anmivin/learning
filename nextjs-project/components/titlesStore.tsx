import { makeAutoObservable, configure, reaction } from 'mobx';
import { Titles, Adding } from '../types/types';

configure({
  enforceActions: 'never',
});
class TitlesStore {
  constructor() {
    makeAutoObservable(this);
  }
  titles = [
    {
      id: 1,
      item: 'Жожа',
      orName: 'JoJo no Kimyou na Bouken',
      picture: 'jojo.jpg',
      discription: 'Мужики из местной качалки понтуются и учат правильно позировать на фото',
      rating: '10/10',
    },
    {
      id: 2,
      item: 'Тетрадь',
      orName: 'Death Note',
      picture: 'dn.jpg',
      discription:
        'Отличник с психическими отклонениями драматично ест чипсы и пытается подавить свои чувства к загадочному эмо-бою',
      rating: '10/10',
    },
    {
      id: 3,
      item: 'Атака',
      orName: 'Shingeki no Kyojin',
      picture: 'at.jpg',
      discription: 'Родившейся в очень странной семье мальчик знает весь сюжет, но не спойлерит другим',
      rating: '10/10',
    },
    {
      id: 4,
      item: 'Сэйлормун',
      orName: 'Bishojo Senshi Sera Mun',
      picture: 'sm.jpg',
      discription:
        'Обычные японские школьницы спасают планету, влияют на фэшн-индустрию и формируют дисморфофобию у зрителей',
      rating: '10/10',
    },
    {
      id: 5,
      item: 'Хигураши',
      orName: 'Higurashi no Naku Koro ni',
      picture: 'hnnkn.jpg',
      discription: 'Группа школьников пытается пережить летний фестиваль. Гаремник с подвохом',
      rating: '10/10',
    },
    {
      id: 6,
      item: 'Дзюндзи Ито',
      orName: 'Itou Junji: Collection',
      picture: 'jic.jpg',
      discription: ' Школьник безобидно шутит над своими одноклассниками и другие истории из жизни в японской глубинке',
      rating: '10/10',
    },
    {
      id: 7,
      item: 'Путь домохозяина',
      orName: 'Gokushufudou',
      picture: 'hw.jpg',
      discription: 'Мафиозник и его идеальная жизнь',
      rating: '10/10',
    },
    {
      id: 8,
      item: 'Токийские мстители',
      orName: 'Tokyo Ribenjazu',
      picture: 'tr.jpg',
      discription: 'Самые горячие мужики в мире дерутся и умирают, а потом не умирают, а потом опять умирают',
      rating: '10/10',
    },
    {
      id: 9,
      item: 'Наруто',
      orName: 'Naruto',
      picture: 'nr.jpg',
      discription: 'Гиперактивный сирота побеждает всех силой дружбы и становится председателем сельсовета',
      rating: '10/10',
    },
  ];
  search: string = '';
  adding: Adding = this.resetAdd();
  itname: string = '';
  pic: string = '';

  resetAdd() {
    return {
      item: '',
      orName: '',
      discription: '',
      rating: '',
    };
  }

  addTitle() {
    const newItem: Titles = { ...this.adding, picture: this.pic, id: Date.now() };
    this.titles.push(newItem);
    this.adding = this.resetAdd();
  }

  get filtered() {
    const searchList: Titles[] = [];
    this.titles.forEach((item) => {
      if (item.item.toLowerCase().includes(this.search) || item.discription.toLowerCase().includes(this.search)) {
        searchList.push(item);
      }
    });

    if (searchList.length) {
      return searchList;
    } else {
      return this.titles;
    }
  }
}
const titlesStore = new TitlesStore();
reaction(
  () => JSON.stringify(titlesStore),
  (json) => {
    localStorage.setItem('titles', json);
  },
);

export default titlesStore;
