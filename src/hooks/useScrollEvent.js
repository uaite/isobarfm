import { useEffect } from 'react';

const useScrollEvent = callback => {
  useEffect(() => {
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  }, [callback]);
};

export default useScrollEvent;
