import { useEffect, useLayoutEffect, useRef } from 'react';

// https://usehooks-ts.com/react-hook/use-interval
export const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return (): void => clearInterval(id);
  }, [delay]);
};
