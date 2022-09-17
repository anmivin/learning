import { makeAutoObservable, configure } from 'mobx';
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
      name: 'Жожа',
      orName: 'JoJo no Kimyou na Bouken',
      picture: 'jojo',
      discription: 'Мужики из местной качалки понтуются и учат правильно позировать на фото',
      rating: '10/10',
    },
    {
      id: 2,
      name: 'Тетрадь',
      orName: 'Death Note',
      picture: 'dn',
      discription:
        'Отличник с психическими отклонениями драматично ест чипсы и пытается подавить свои чувства к загадочному эмо-бою',
      rating: '10/10',
    },
    {
      id: 3,
      name: 'Атака',
      orName: 'Shingeki no Kyojin',
      picture: 'at',
      discription: 'Родившейся в очень странной семье мальчик знает весь сюжет, но не спойлерит другим',
      rating: '10/10',
    },
    {
      id: 4,
      name: 'Сэйломун',
      orName: 'Bishojo Senshi Sera Mun',
      picture: 'sm',
      discription:
        'Обычные японские школьницы спасают планету, влияют на фэшн-индустрию и формируют дисморфофобию у зрителей',
      rating: '10/10',
    },
    {
      id: 5,
      name: 'Хигураши',
      orName: 'Higurashi no Naku Koro ni',
      picture: 'hnnkn',
      discription: 'Группа школьников пытается пережить летний фестиваль. Гаремник с подвохом',
      rating: '10/10',
    },
    {
      id: 6,
      name: 'дзюндзи ито',
      orName: 'Itou Junji: Collection',
      picture: 'jic',
      discription: ' Школьник безобидно шутит над своими одноклассниками и другие истории из жизни в японской глубинке',
      rating: '10/10',
    },
    {
      id: 7,
      name: 'Путь домохозяина',
      orName: 'Gokushufudou',
      picture: 'hw',
      discription: 'Мафиозник и его идеальная жизнь',
      rating: '10/10',
    },
    {
      id: 8,
      name: 'Токийские мстители',
      orName: 'Tokyo Ribenjazu',
      picture: 'tr',
      discription: 'Самые горячие мужики в мире дерутся и умирают, а потом не умирают, а потом опять умирают',
      rating: '10/10',
    },
    {
      id: 9,
      name: 'Наруто',
      orName: 'Naruto',
      picture: 'nr',
      discription: 'Гиперактивный сирота побеждает всех силой дружбы и становится председателем сельсовета',
      rating: '10/10',
    },
  ];
  search: string = '';
  adding: Adding = this.resetAdd();
  itname: string = '';

  resetAdd() {
    return {
      name: '',
      orName: '',
      discription: '',
      rating: '',
      picture: '',
    };
  }

  addTitle() {
    const newItem: Titles = { ...this.adding, id: 19 };
    this.titles.push(newItem);
    this.adding = this.resetAdd();
  }

  get filtered() {
    const searchList: Titles[] = [];
    this.titles.forEach((item) => {
      if (item.name.toLowerCase().includes(this.search) || item.discription.toLowerCase().includes(this.search)) {
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
export default titlesStore;
