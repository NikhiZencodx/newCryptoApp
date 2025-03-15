import Image from 'next/image';

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={90}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}