import { useState, useEffect, useRef } from 'react';

const useDocumentVisibility = () => {
  const [count, setCount] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const callback = useRef<((isVisible: boolean) => void)[]>([]);

  const visibilityEvent = () => {
    if (document.visibilityState === 'hidden') {
      setCount((count) => count + 1);
      setVisible(false);
    } else {
      setVisible(true);
    }
  
  
  useEffect(() => {
    const handler = () => {
      setVisible(!document.hidden);
      if (document.hidden) {
        setCount((count) => count + 1);
      }
      callback.current.forEach((func) => func(!document.hidden));
    };

    document.addEventListener('visibilitychange', handler);

    return () => {
      document.removeEventListener('visibilitychange', handler);
    };
  }, []);

  return { visible, count };
};

export default useDocumentVisibility
