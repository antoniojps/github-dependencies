import { useState, useEffect, useMemo } from 'react';

const MILISECONDS_PROLONGED = 200;

export function useProlongedLoading(isLoading: boolean) {
  const [loadingMs, setLoadingMs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading) {
        setLoadingMs((ms) => ms + MILISECONDS_PROLONGED);
      } else {
        setLoadingMs(0);
        clear();
      }
    }, MILISECONDS_PROLONGED / 2);

    function clear() {
      clearInterval(interval);
    }

    return clear;
  }, [isLoading]);

  // only show loading progress bar if is prolonged loading
  const isProlongedLoading = useMemo(() => loadingMs >= MILISECONDS_PROLONGED, [loadingMs]);

  return isProlongedLoading;
}
