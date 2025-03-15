'use client';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fade-up' 
}) {
  const [ref, isVisible] = useIntersectionObserver();

  const animations = {
    'fade-up': 'opacity-0 translate-y-10 transition-all duration-700',
    'fade-in': 'opacity-0 transition-opacity duration-700',
    'slide-in': 'opacity-0 -translate-x-10 transition-all duration-700'
  };

  return (
    <div
      ref={ref}
      className={`
        ${animations[animation]}
        ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}