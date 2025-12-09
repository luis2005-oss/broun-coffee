function Title({
  level = 'h1',
  children,
  text,
  className = '',
  variant = 'default',
  align = 'left',
  weight = 'normal',
  ...props
}) {
  const Tag = level;

  const variants = {
    default: 'text-black',
    primary: 'text-white',
    secondary: 'text-[#FFBB00]',
    danger: 'text-gray-500',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const defaultByLevel = {
  h1: 'text-3xl md:text-4xl',
  h2: 'text-[1.3em] sm:text-[1.7em] md:text-[1.9em]',
  h3: 'text-base sm:text-[1.2em] md:text-xl',
  h4: 'text-sm sm:text-base md:text-lg',
  h5: 'text-xs sm:text-sm md:text-base',
  h6: 'text-[10px] sm:text-xs md:text-sm',
};


  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
  };

  return (
    <Tag
      className={`
        ${defaultByLevel[level] || defaultByLevel.h1}
        ${weights[weight] || weights.normal}
        ${variants[variant] || variants.default}
        ${alignments[align] || alignments.left}
        ${className}
      `}
      {...props}
    >
      {children || text}
    </Tag>
  );
}

export { Title };
