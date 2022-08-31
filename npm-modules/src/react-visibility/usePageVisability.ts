import { useState, useEffect, useRef } from "react";

export function usePageVisibility() {
  const [visible, setVisible] = useState(!document.hidden);
  const [count, setcount] = useState(0);
  const ref = useRef<((param: boolean) => void)[]>([]);

  useEffect(() => {
    const changeVisability = () => {
      if (document.hidden) {
        setcount((count) => count + 1);
      }
      setVisible(!document.hidden);
      ref.current.forEach((changeVisability) =>
        changeVisability(!document.hidden)
      );
    };
    document.addEventListener("visibilitychange", changeVisability);
    return () => {
      document.removeEventListener("visibilitychange", changeVisability);
    };
  }, []);
  const onVisibilityChange = (func: (param: boolean) => void) => {
    ref.current = [...ref.current, func];
  };
  return { visible, count, onVisibilityChange };
}
