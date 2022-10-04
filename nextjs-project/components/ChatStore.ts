import { makeAutoObservable, configure } from 'mobx';
import { db, answers } from './ChatDb';
import uniqid from 'uniqid';
import moment from 'moment';
import { emojis } from './ChatDb';
configure({
  enforceActions: 'always',
});
class MobxChat {
  chatHistory = [];
  emojiVisibility = false;
  input = '';
  message = [];
  chatVisibility = false;
  constructor() {
    makeAutoObservable(this);
  }

  setAsk() {
    this.message.push(this.input);
    this.input = '';
  }

  openArt(key: string) {
    const choose = db.find((it) => it.id === key);
    if (choose) {
      this.chatHistory.push({ id: uniqid(), pp: choose.name, whose: false, time: moment().local().format('HH:mm') });

      setTimeout(() => {
        this.chatHistory.push({
          id: uniqid(),
          pp: choose.content,
          whose: true,
          href: choose.href,
          time: moment().format('HH:mm'),
        });
      }, 1000);
    } else {
      this.chatHistory.push({ pp: answers[7], id: uniqid(), whose: true, time: moment().format('HH:mm') });
    }
  }

  setMessage() {
    this.chatHistory.push({ pp: this.message, id: uniqid(), whose: false, time: moment().format('HH:mm') });

    setTimeout(() => {
      this.setAnswer();
      this.message.length = 0;
    }, 1000);
  }

  setAnswer() {
    if (this.message.includes('bitch')) {
      return this.chatHistory.push({ pp: answers[0], id: uniqid(), whose: true, time: moment().format('HH:mm') });
    }
    if (this.message.includes('🌀')) {
      return this.chatHistory.push({ pp: answers[1], id: uniqid(), whose: true, time: moment().format('HH:mm') });
    }
    if (this.message.includes('❤️')) {
      return this.chatHistory.push({ pp: answers[3], id: uniqid(), whose: true, time: moment().format('HH:mm') });
    }
    if (this.message.includes('⚜️')) {
      return this.chatHistory.push({ pp: answers[4], id: uniqid(), whose: true, time: moment().format('HH:mm') });
    }
    if (this.message.includes('🔮')) {
      return this.chatHistory.push(
        {
          pp: answers[5],
          id: uniqid(),
          whose: true,
          time: moment().format('HH:mm'),
        },
        {
          pp: answers[6],
          id: uniqid(),
          whose: true,
          time: moment().format('HH:mm'),
        },
      );
    }
    if (this.message.includes('назад') || this.message.includes('back')) {
      return (this.chatHistory.length = 0);
    }
    return this.chatHistory.push({
      pp: answers[2],
      id: uniqid(),
      whose: true,
      time: moment().format('HH:mm'),
    });
  }
  chooseEmoji(key: string) {
    this.input = this.input + emojis.find((it) => it.id === key).emo;
    this.emojiVisibility = !this.emojiVisibility;
  }

  changeEmojiVisibility() {
    this.emojiVisibility = !this.emojiVisibility;
  }

  setInput(value: string) {
    this.input = value;
  }
  changeVisibility() {
    this.chatVisibility = !this.chatVisibility;
  }
}
const mobxchat = new MobxChat();

export default mobxchat;
