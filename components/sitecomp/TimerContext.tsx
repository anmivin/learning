import { createContext } from 'react';

const TimerContext = createContext({
  secs: 0,
});

export default TimerContext;
