import { useEffect, useRef } from 'react';

export const useTimer = (callback, time) => {
  const refCallback = useRef(callback);

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (time === null) return;
    const id = setInterval(() => refCallback.current(), time);
    return () => clearInterval(id);
  }, [time]);
};
