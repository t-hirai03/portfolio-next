import React from 'react';

type TitleProps = {
  text: string;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-center mb-0 sm:mb-4 ${className}`}
    >
      <h2 className='text-2xl sm:text-4xl font-bold mb-4 sm:mb-0'>{text}</h2>
    </div>
  );
};
