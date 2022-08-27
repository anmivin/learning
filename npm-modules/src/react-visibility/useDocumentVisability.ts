import { useState, useEffect, useRef } from 'react';

function getHidden() {
  if (typeof document !== 'undefined' ) {
    return !document.hidden}
   else { return true}
  
}
export function usePageVisibility() {
    const [visible, setVisible] = useState(getHidden());
    const [count, setcount] = useState(0);
    const ref = useRef<((param: boolean)=> void)[]>([]);
    

    const onVisibilityChange = (func: (param: boolean)=>void) => {
      ref.current.push(func);
  }

    

    
    useEffect(() => {
      const onVisibility = () => {
        if (document.hidden) {
            setcount((count) => count + 1);
            
          }
          ref.current.forEach((func) => func(!document.hidden))
          setVisible(!document.hidden)
          
      }

    
      
      document.addEventListener("visibilitychange", onVisibility)
  
      return () => {
        document.removeEventListener("visibilitychange", onVisibility)
      };
    }, []);
  
    return { visible, count, onVisibilityChange}
  }