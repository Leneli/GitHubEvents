import { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getEvents } from '../store';
import { useTimer } from '../hooks';
import { TIMER_AUTO, TIMER_MANUAL } from '../constants';

export const useUpdate = () => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const tick = useRef(0);

  const update = useCallback(() => {
    dispatch(getEvents());
    setDisabled(true);
    tick.current = 0;
  }, [dispatch]);

  useTimer(
    () => {
      tick.current += 1;

      if (tick.current >= TIMER_AUTO) {
        update();
        return;
      }

      if (tick.current >= TIMER_MANUAL) setDisabled(false);
    },
    isFocused ? 1000 : null,
  );

  return [disabled, update];
};
