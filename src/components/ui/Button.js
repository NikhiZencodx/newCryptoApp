import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'default', 
  size = 'default',
  className = '' 
}) {
  const baseStyles = 'h-10 outline outline-1 outline-white rounded-lg min-w-[96px] inline-flex items-center justify-center px-4 font-semibold transition-all duration-300 hover:opacity-90';
  
  const variants = {
    default: '',
    primary: 'bg-gradient-to-r from-[#18c8ff] to-[#933ffe] outline-none',
    white: 'bg-white text-black'
  };
  
  const sizes = {
    default: '',
    base: 'h-14 min-w-[156px] sm:h-[50px]'
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}