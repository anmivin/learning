import { makeAutoObservable, configure } from 'mobx';

configure({ enforceActions: 'never' });
class Word {
  letter: string = '';
  theword: string[] = ['К', 'О', 'В', 'Р', 'И', 'Ж', 'К', 'А'];
  yourword: string[] = [' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '];
  visibility: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  addLetter() {
    const niceLetter = this.letter.toUpperCase();
    const why = this.theword.indexOf(niceLetter);

    if (why === 0) {
      alert('Есть такая буква');
      this.yourword[0] = 'К';
      this.yourword[6] = 'К';
      this.letter = '';
    } else {
      if (why !== -1) {
        this.yourword[why] = niceLetter;
        this.letter = '';
        alert('Есть такая буква');
      } else {
        alert('Неверно');
        this.letter = '';
      }
    }
    if (JSON.stringify(this.theword) === JSON.stringify(this.yourword)) {
      alert('И У НАС ЕСТЬ ПОБЕДИТЕЛЬ');
      this.visibility = true;
    }
  }
  hidePicture() {
    this.visibility = false;
  }
}
const word = new Word();

export default word;
