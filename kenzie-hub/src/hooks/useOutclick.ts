import { useEffect, useRef } from 'react';

export const useOutclick = <Element extends globalThis.Element>(
  callback: () => void
) => {
  const ref = useRef<Element>(null);

  useEffect(() => {
    function handleOutclick(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Element)) {
        callback();
      }
    }

    window.addEventListener('mousedown', handleOutclick);

    return () => {
      window.removeEventListener('mousedown', handleOutclick);
    };
  }, []);

  return ref;
};
