import { useState, useEffect, useRef } from "react";

export function usePageVisibility() {
  const [visible, setVisible] = useState(!document.hidden);
  const [leaveCount, setLeaveCount] = useState(0);
  const callback = useRef<((param: boolean) => void)[]>([]);

  useEffect(() => {
    const changeVisability = () => {
      if (document.hidden) {
        setLeaveCount((leaveCount) => leaveCount + 1);
      }
      setVisible(!document.hidden);
      callback.current.forEach((changeVisability) =>
        changeVisability(!document.hidden)
      );
    };
    document.addEventListener("visibilitychange", changeVisability);
    return () => {
      document.removeEventListener("visibilitychange", changeVisability);
    };
  }, []);
  const onVisibilityChange = (func: (param: boolean) => void) => {
    callback.current = [...callback.current, func];
  };
  return { visible, leaveCount, onVisibilityChange };
}
