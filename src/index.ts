import { useState, useEffect } from 'react';

export default () => {
  const [bodyOffset, setBodyOffset] = useState<any>(
    typeof window !== 'undefined' ? document.body.getBoundingClientRect() : {}
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top || 0);
  const [scrollX, setScrollX] = useState(bodyOffset.left || 0);

  const listener = () => {
    const data = document.body.getBoundingClientRect();
    setBodyOffset(data);
    setScrollY(-data.top);
    setScrollX(data.left);
  };

  const blockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unblockScroll = () => {
    document.body.style.overflow = 'auto';
  };

  const setYPosition = (position: number) => {
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  const isScrollBlocked = (): boolean => {
    return document.body.style.overflow === 'hidden';
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
    scrollX,
    blockScroll,
    unblockScroll,
    setYPosition,
    isScrollBlocked
  };
}
