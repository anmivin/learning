import { makeAutoObservable } from 'mobx';

class TimerCount {
  secs = 0;
  constructor() {
    makeAutoObservable(this);
  }
  counting() {
    this.secs = this.secs + 1;
  }
}

export default new TimerCount();
