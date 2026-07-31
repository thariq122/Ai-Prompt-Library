import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function PageTransition({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="w-full flex-grow">
      {children}
    </div>
  );
}

export default PageTransition;